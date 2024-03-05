import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
// const isNotShort = (value, param) => value.length > param;
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    isLengthOk: enteredNameIsLong,
    hasError: nameInputHasError,
    hasErrorForLength: enteredNameIsNotLong,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty, (value) => value.length > 4);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    isLengthOk: enteredLastNameIsLong,
    hasError: lastNameInputHasError,
    hasErrorForLength: enteredLastNameIsNotLong,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(
    isNotEmpty,
    (value) => value.length > 2
  );

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    isEmail,
    (value) => true
  );

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredNameIsLong &&
    enteredLastNameIsValid &&
    enteredLastNameIsLong &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName, enteredLastName, enteredEmail);
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError || enteredNameIsNotLong
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputHasError || enteredLastNameIsNotLong
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
          {enteredNameIsNotLong && (
            <p className="error-text">Name must be at least 5 characters.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Lastname must not be empty.</p>
          )}
          {enteredLastNameIsNotLong && (
            <p className="error-text">
              Lastname must be at least 3 characters.
            </p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
