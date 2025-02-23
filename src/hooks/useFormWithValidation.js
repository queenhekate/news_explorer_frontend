import { useState, useCallback } from "react";

export function useFormWithValidation() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
    setErrors((errors) => ({
      ...errors,
      [e.target.name]: e.target.validationMessage,
    }));
    setIsValid(e.target.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (
      newValues = { email: "", password: "", username: "" },
      newErrors = {},
      newIsValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );
  return { values, setValues, handleChange, isValid, errors, resetForm };
}