import React from "react";
import "./LightGrid.css";

const GRID = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

function LightGrid() {
  const gridStack = [];
  const [isDeactivating, setIsDeactivating] = React.useState(false);

  function getLight(key, isHidden) {
    return (
      <div
        key={key}
        className={`light-container ${isHidden && "hidden"}`}
        onClick={handleClick}
      />
    );
  }

  function handleClick(e) {
    if (!isDeactivating) {
      if (e.target.classList.contains("green")) {
        removeFromStack(e.target);
      } else {
        addToStack(e.target);
      }
      e.target.classList.toggle("green");
    }
  }

  function addToStack(node) {
    gridStack.push(node);
    if (gridStack.length === 8) {
      deactivateGrid();
    }
  }

  function removeFromStack(node) {
    gridStack.splice(gridStack.indexOf(node), 1);
  }

  function deactivateGrid() {
    let node;
    setIsDeactivating(true);
    setTimeout(() => {
      node = gridStack.pop();
      node.classList.toggle("green");
      if (gridStack.length) {
        deactivateGrid();
      } else {
        setIsDeactivating(false);
      }
    }, 500);
  }

  return (
    <div className="light-grid-container">
      {GRID.map((row, i) => (
        <div key={`Row${i}`} className="grid-row">
          {row.map((cell, j) =>
            cell ? getLight(`Item${i}${j}`) : getLight(`Item${i}${j}`, true)
          )}
        </div>
      ))}
    </div>
  );
}

export default LightGrid;
