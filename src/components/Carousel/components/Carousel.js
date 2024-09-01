import React from "react";
import styles from "../myApp.module.css";

export const CarouselContext = React.createContext();

function Carousel(props) {
  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);
  const [itemCount, setItemCount] = React.useState(0);

  return (
    <div className={styles.carousel}>
      <CarouselContext.Provider
        value={{
          currentItemIndex,
          setCurrentItemIndex,
          itemCount,
          setItemCount,
        }}
      >
        {props.children}
      </CarouselContext.Provider>
    </div>
  );
}

export default Carousel;
