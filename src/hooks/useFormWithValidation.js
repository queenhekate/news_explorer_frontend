import { useState, useCallback } from "react";

export function useFormWithValidation() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    // Custom error messages
    let errorMessage = "";
    if (event.target.validity.valueMissing) {
      errorMessage = "This field is required";
    } else if (event.target.validity.typeMismatch && name === "email") {
      errorMessage = "Please enter a valid email address";
    } else if (event.target.validity.tooShort) {
      errorMessage = `Minimum length is ${event.target.minLength} characters`;
    }

    setErrors({ ...errors, [name]: errorMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}