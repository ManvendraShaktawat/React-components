import React from "react";
import styles from "./myApp.module.css";

const DIRS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const SIZE = 10;
const MINES_COUNT = Math.floor(SIZE * SIZE * 0.1); // 10% mines

const GRID = Array(SIZE)
  .fill()
  .map(() => Array(SIZE).fill(""));

function placeMines() {
  let placedMines = 0;
  while (placedMines < MINES_COUNT) {
    const x = Math.floor(Math.random() * SIZE);
    const y = Math.floor(Math.random() * SIZE);
    if (GRID[x][y] !== "M") {
      GRID[x][y] = "M";
      placedMines++;
    }
  }
}

function constructGrid() {
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (GRID[i][j] !== "M") {
        let count = 0;
        DIRS.forEach(([di, dj]) => {
          const ci = i + di;
          const cj = j + dj;
          if (ci >= 0 && ci < SIZE && cj >= 0 && cj < SIZE) {
            if (GRID[ci][cj] === "M") {
              count++;
            }
          }
        });
        GRID[i][j] = count > 0 ? count : "";
      }
    }
  }
  return GRID;
}

placeMines();
constructGrid();

function MyApp() {
  const [gameResult, setGameResult] = React.useState("pending");
  const [revealed, setRevealed] = React.useState(
    Array(SIZE)
      .fill()
      .map(() => Array(SIZE).fill(false))
  );
  const countRef = React.useRef(0);

  function handleClick([i, j]) {
    if (revealed[i][j]) {
      return;
    }

    const newRevealed = [...revealed];
    newRevealed[i][j] = true;
    setRevealed(newRevealed);

    countRef.current++;

    if (countRef.current === SIZE * SIZE - MINES_COUNT) {
      gameResult !== "lost" && setGameResult("win");
      return;
    }
    if (GRID[i][j] === "M") {
      gameResult !== "win" && setGameResult("lost");
      return;
    }

    if (GRID[i][j] === "") {
      setTimeout(() => {
        DIRS.forEach(([di, dj]) => {
          const ci = i + di;
          const cj = j + dj;
          if (ci >= 0 && ci < SIZE && cj >= 0 && cj < SIZE) {
            if (GRID[ci][cj] !== "M") {
              handleClick([ci, cj]);
            }
          }
        });
      }, 0);
    }
  }

  return (
    <div className={styles.container}>
      {GRID.map((row, i) => (
        <div key={i} className={styles.row}>
          {row.map((cell, j) => (
            <div key={`${i}${j}`} className={styles.cell}>
              <div
                className={`${styles.cellContent} ${
                  revealed[i][j] && cell === "M" && styles.mine
                }`}
              >
                {cell}
              </div>
              {!revealed[i][j] && (
                <button onClick={() => handleClick([i, j])} />
              )}
            </div>
          ))}
        </div>
      ))}
      {gameResult === "lost" && <h2 style={{ color: "red" }}>Game over!</h2>}
      {gameResult === "win" && <h2 style={{ color: "green" }}>You won!</h2>}
    </div>
  );
}

export default MyApp;
