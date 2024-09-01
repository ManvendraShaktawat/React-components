import React from "react";
import styles from "./myApp.module.css";
import { getPaginatedCountries } from "./data";

const LIMIT = 25;

function MyApp() {
  const [countries, setCountries] = React.useState([]);
  const [startIndex, setStartIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(getCountries, []);

  function getCountries() {
    setIsLoading(true);
    getPaginatedCountries(startIndex, LIMIT).then((data) => {
      const newList = [...countries, ...data];
      setCountries(newList);
      setIsLoading(false);
      setStartIndex(startIndex + LIMIT);
    });
  }

  function handleScroll(e) {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const bottom = scrollHeight - scrollTop === clientHeight;
    if (bottom) {
      getCountries();
    }
  }

  return (
    <div className={styles.container}>
      <ul className={styles.listContainer} onScroll={handleScroll}>
        {countries.map((country) => (
          <li key={country.name} className={styles.listItem}>
            {country.name}
          </li>
        ))}
        {isLoading && <li className={styles.loader}>------ Loading ------</li>}
      </ul>
    </div>
  );
}

export default MyApp;
