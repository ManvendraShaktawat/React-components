import React from "react";
import styles from "./myApp.module.css";
import Popup from "./Popup";

function Bar({ bar, maxHeight }) {
  const [coordinates, setCoordinates] = React.useState([]);
  const heightPercent = (bar.ticketCount / maxHeight) * 100;

  function getCoordinates(e) {
    setCoordinates([e.clientX, e.clientY]);
  }

  return (
    <li
      className={styles.bar}
      style={{
        height: `${heightPercent}%`,
        backgroundColor: bar.color,
      }}
      onMouseMove={getCoordinates}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const text = e.dataTransfer.getData("text");
        console.log(`Dropped ${text} on ${bar.name} column`);
      }}
    >
      <Popup bar={bar} coordinates={coordinates} />
    </li>
  );
}

export default Bar;
