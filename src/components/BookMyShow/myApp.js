import React from "react";
import styles from "./myApp.module.css";
import Grid from "./grid";

// const GRID_DATA = Array.from({ length: 10 }).map((_, row) => {
//   return Array.from({ length: 10 }).map((_, i) => false);
// });
const GRID_DATA = Array(10)
  .fill([])
  .map((_, row) => {
    return Array(10).fill(false);
  });

function BookMyShow() {
  return (
    <div>
      <Grid gridData={GRID_DATA} numberOfSeats={4} />
    </div>
  );
}

export default BookMyShow;
