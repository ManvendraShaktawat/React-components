import React from "react";
import styles from "./Form.module.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

function Form() {
  const [formData, setFormData] = React.useState(initialState);
  const [errors, setErrors] = React.useState(initialState);

  function getInput(type) {
    const isError = errors[type];
    return (
      <div className={styles.inputContainer}>
        <label htmlFor={type}>{type}:</label>
        <input
          type="text"
          name={type}
          placeholder={`Type ${type}..`}
          value={formData[type]}
          className={isError && styles.redBorder}
          onChange={(e) => {
            setFormData({ ...formData, [type]: e.target.value });
            setErrors({ ...errors, [type]: "" });
          }}
        />
        {isError && (
          <span className={styles.errors}>Error: {errors[type]}</span>
        )}
      </div>
    );
  }

  function handleSubmit() {
    const errorMessages = {
      name: null,
      email: "email is in incorrect format!",
      phone: null,
    };

    setErrors(errorMessages);
  }

  return (
    <div className={styles.container}>
      {getInput("name")}
      {getInput("email")}
      {getInput("phone")}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
