import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, buttonText, onFooterLinkClick }) {
  const { values, handleChange, errors } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", values);
  };

  // Add console.log to debug isOpen state
  console.log("LoginModal isOpen:", isOpen);

  // Early return if not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <ModalWithForm
        title="Sign In"
        name="login"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText={buttonText}
        footerLinkText="Sign Up"
      onFooterLinkClick={onFooterLinkClick}
      >
        <label className="modal__label">
          Email{" "}
          <input
            type="text"
            className="modal__input"
            name="email"
            placeholder="Email"
            minLength={2}
            value={values.email}
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
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <span className="modal__error">{errors.password}</span>
          )}
        </label>
      </ModalWithForm>
    </div>
  );
}

export default LoginModal;
