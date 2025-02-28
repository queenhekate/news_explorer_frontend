import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, buttonText, onFooterLinkClick, title }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", values);
  };

  if (!isOpen) {
    return null;
  }

  return (
    // <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
    <ModalWithForm
      title={title}
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      footerLinkText="Sign Up"
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
          autoComplete="current-password"
          minLength={8}
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
    </ModalWithForm>
    // </div>
  );
}

export default LoginModal;
