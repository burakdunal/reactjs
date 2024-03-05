import React, { useState } from "react";
import styles from "./InputForm.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  "duration": 10
};

const InputForm = (props) => {
  const [formInput, setUserInput] = useState(initialUserInput);

  // const currentSavChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, current_savings: event.target.value };
  //   });
  // };
  // const yearlySavChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, yearly_contribution: event.target.value };
  //   });
  // };
  // const interestChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, expected_return: event.target.value };
  //   });
  // };
  // const durationChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, duration: event.target.value };
  //   });
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setUserInput({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      "duration": "",
    });
    props.onCalculateData(formInput);
  };

  const resetButtonHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value
      };
    });
  };

  const showListHandler = () => {
    props.onShowList();
  }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formInput["current-savings"]}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formInput["yearly-contribution"]}
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formInput["expected-return"]}
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formInput["duration"]}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          onClick={resetButtonHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
        <button type="button" onClick={showListHandler} className={styles.button}>
          Show
        </button>
      </p>
    </form>
  );
};

export default InputForm;
