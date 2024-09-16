import React, { useState, useEffect } from "react";
import "./PairMatchingGame.css";

const initialCards = [
  { id: 1, value: "Ross", matched: false },
  { id: 2, value: "Rachel", matched: false },
  { id: 3, value: "Joey", matched: false },
  { id: 4, value: "Chandler", matched: false },
  { id: 5, value: "Monica", matched: false },
  { id: 6, value: "Phoebe", matched: false },
  { id: 7, value: "Ross", matched: false },
  { id: 8, value: "Rachel", matched: false },
  { id: 9, value: "Joey", matched: false },
  { id: 10, value: "Chandler", matched: false },
  { id: 11, value: "Monica", matched: false },
  { id: 12, value: "Phoebe", matched: false },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const PairMatchingGame = () => {
  const [cards, setCards] = useState(shuffleArray([...initialCards]));
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const handleFlipCard = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setTimeout(() => checkMatch(newFlippedCards), 1000);
    }
  };

  const checkMatch = (flippedCards) => {
    const [first, second] = flippedCards;
    if (cards[first].value === cards[second].value) {
      const updatedCards = cards.map((card, index) => {
        if (index === first || index === second) {
          return { ...card, matched: true };
        }
        return card;
      });
      setCards(updatedCards);
    }
    setFlippedCards([]);
    setMoves((prev) => prev + 1);
  };

  return (
    <div className="game-container">
      <h2>Pair Matching Game</h2>
      <div className="moves">Moves: {moves}</div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${
              flippedCards.includes(index) || card.matched ? "flipped" : ""
            }`}
            onClick={() => handleFlipCard(index)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PairMatchingGame;
