import React from "react";
import "./ModalWithForm.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function ModalWithForm({
  children,
  name,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
}) {
  function handleOverlayClick(e) {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  }

  const { isValid } = useFormWithValidation({});

  if (!isOpen) return null; 

  return (
    <div
      className="modal modal_opened"
      onClick={handleOverlayClick}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__submit" disabled={isValid}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
