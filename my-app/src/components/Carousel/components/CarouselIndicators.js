import React from "react";
import { CarouselContext } from "./Carousel";
import styles from "../myApp.module.css";

function CarouselIndicators() {
  const { currentItemIndex, setCurrentItemIndex, itemCount } =
    React.useContext(CarouselContext);

  function handleChange(index) {
    setCurrentItemIndex(index);
  }

  return (
    <ul className={styles.indicators}>
      {Array(itemCount)
        .fill()
        .map((_, index) => (
          <li key={index}>
            <input
              type="radio"
              checked={index === currentItemIndex}
              onChange={() => handleChange(index)}
            />
          </li>
        ))}
    </ul>
  );
}

export default CarouselIndicators;
