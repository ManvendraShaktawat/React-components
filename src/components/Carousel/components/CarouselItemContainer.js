import React from "react";
import styles from "../myApp.module.css";
import { CarouselContext } from "./Carousel";

function CarouselItemContainer(props) {
  const { currentItemIndex, setItemCount } = React.useContext(CarouselContext);

  React.useEffect(() => {
    setItemCount(React.Children.count(props.children));
  }, []);

  return (
    <div className={styles.carouselItemContainer}>
      {props.children.at(currentItemIndex)}
    </div>
  );
}

export default CarouselItemContainer;
