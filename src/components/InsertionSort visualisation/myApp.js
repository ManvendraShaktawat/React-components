import React, { useState, useEffect } from "react";
import "./InsertionSort.css";

const InsertionSort = () => {
  const [array, setArray] = useState([50, 30, 20, 10, 60, 40]); // Initial array to sort
  const [current, setCurrent] = useState(null); // Current index being sorted
  const [next, setNext] = useState(null); // Index being compared

  // Delay to visualize each step of the sorting process
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Function to handle insertion sort with visualization
  const insertionSort = async () => {
    let arr = [...array];

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      setCurrent(i);

      while (j >= 0 && arr[j] > key) {
        setNext(j);
        arr[j + 1] = arr[j];
        setArray([...arr]);
        await delay(1000);
        j--;
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await delay(2000);
    }

    // Reset the markers after sorting
    setCurrent(null);
    setNext(null);
  };

  return (
    <div>
      <h2>Insertion Sort Visualization</h2>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${index === current ? "current" : ""} ${
              index === next ? "next" : ""
            }`}
            style={{ height: `${value * 5}px` }}
          >
            {value}
          </div>
        ))}
      </div>
      <button onClick={insertionSort}>Start Sorting</button>
    </div>
  );
};

export default InsertionSort;
