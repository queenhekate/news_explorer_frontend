// import React, { useState } from 'react';
import React, { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";
import RegistrationCompleteModal from "../RegistrationCompleteModal/RegistrationCompleteModal";

function RegisterModal({
  isOpen,
  onClose,
  onSignUp,
  buttonText,
  onFooterLinkClick,
  title,
}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignUp(values.email, values.password, values.username);
    setIsRegistrationComplete(true);
    onClose();
    resetForm();
  };

  const handleRegistrationCompleteClose = () => {
    setIsRegistrationComplete(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ModalWithForm
        title={title}
        name="register"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText={buttonText}
        footerLinkText="Sign In"
        onFooterLinkClick={onFooterLinkClick}
        isValid={isValid}
      >
        <label className="modal__label">
          Email{" "}
          <input
            type="email"
            className="modal__input"
            name="email"
            placeholder="Email"
            value={values.email || ""}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          {errors.email && <span className="modal__error">{errors.email}</span>}
        </label>
        <label className="modal__label">
          Password{" "}
          <input
            type="password"
            className="modal__input"
            name="password"
            placeholder="Password"
            minLength={8}
            autoComplete="current-password"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <span className="modal__error">{errors.password}</span>
          )}
        </label>
        <label className="modal__label">
          Username{" "}
          <input
            type="username"
            className="modal__input"
            name="username"
            placeholder="Username"
            autoComplete="current-username"
            minLength={2}
            value={values.username || ""}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <span className="modal__error">{errors.password}</span>
          )}
        </label>
      </ModalWithForm>
      <RegistrationCompleteModal
        isOpen={isRegistrationComplete}
        onClose={handleRegistrationCompleteClose}
        footerLinkText="Sign In"
        onFooterLinkClick={onFooterLinkClick}
      />
    </>
  );
}

export default RegisterModal;
