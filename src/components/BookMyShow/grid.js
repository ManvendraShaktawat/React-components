import React from "react";
import styles from "./myApp.module.css";

function Grid({ gridData, numberOfSeats }) {
  const [grid, setGrid] = React.useState(gridData);

  function updateSelection(i, j) {
    let startRow = i,
      startColumn = j;
    if (j > grid.length - numberOfSeats) {
      startRow = i + 1;
      startColumn = 0;
    }
    const newGrid = grid.map((row, k) =>
      row.map((_, l) => {
        if (
          startRow === k &&
          l >= startColumn &&
          l < startColumn + numberOfSeats
        ) {
          return true;
        }
        return false;
      })
    );
    setGrid(newGrid);
  }

  return (
    <div>
      {grid.map((row, i) => (
        <div className={styles.row} key={i}>
          {grid[i].map((column, j) => (
            <div
              key={j}
              className={`${styles.box} ${grid[i][j] && styles.selected}`}
              onClick={() => updateSelection(i, j)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
