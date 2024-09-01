import React from "react";
import styles from "./myApp.module.css";

function Popup({ bar, coordinates }) {
  return (
    <div
      className={styles.popup}
      style={{ left: (coordinates[0] || 0) + 15, top: coordinates[1] }}
    >
      {bar.name} ({bar.ticketCount})
    </div>
  );
}

export default Popup;
