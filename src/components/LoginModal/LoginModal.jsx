import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, buttonText }) {
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
<div className="modal">
      <ModalWithForm
        title="Log In"
        name="login"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText={buttonText}
      >
        <label className="modallabel">
          Email *{" "}
          <input
            type="text"
            className="modalinput"
            name="email"
            placeholder="Email"
            minLength={2}
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          {errors.email && <span className="modalerror">{errors.email}</span>}
        </label>
        <label className="modallabel">
          Password *{" "}
          <input
            type="password"
            className="modalinput"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <span className="modalerror">{errors.password}</span>
          )}
        </label>
        <p className="modalregister-text">
          or{" "}
          <button className="modallink-register" onClick={onClose}>
            Sign Up
          </button>
        </p>
      </ModalWithForm>
    </div>
}

export default LoginModal;