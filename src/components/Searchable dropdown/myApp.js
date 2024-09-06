import React from "react";
import styles from "./myApp.module.css";
import { getCountries } from "./data";

function MyApp() {
  const [countries, setCountries] = React.useState([]);
  const [filteredCountries, setFilteredCountries] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    getCountries().then((data) => setCountries(data));
    inputRef.current.focus();
  }, []);

  function filterCountries(e) {
    const searchText = e.target.value.toLowerCase();
    if (!searchText.length) {
      setFilteredCountries([]);
    } else {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(searchText)
        )
      );
    }
  }

  function debounce(fn, timeout) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => fn(...args), timeout);
    };
  }

  const debouncedFilterCountries = debounce(filterCountries, 500);

  function selectCountry(country) {
    setSelectedCountry(country);
    inputRef.current.value = country.name;
    setFilteredCountries([]);
  }

  return (
    <div className={styles.container}>
      <label>Select country</label>
      <input
        className={styles.input}
        placeholder="Type country here.."
        ref={inputRef}
        onChange={debouncedFilterCountries}
      />
      {!!filteredCountries.length && (
        <ul className={styles.listContainer}>
          {filteredCountries.map((country) => (
            <li
              key={country.name}
              className={styles.listItem}
              onClick={() => selectCountry(country)}
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}
      {selectedCountry && (
        <div
          className={styles.selected}
        >{`Capital: ${selectedCountry.capital}`}</div>
      )}
    </div>
  );
}

export default MyApp;
