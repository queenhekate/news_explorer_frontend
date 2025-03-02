import React from "react";
import "../ModalWithForm/ModalWithForm.css";

function RegistrationCompleteModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button type="button" className="modal__close" onClick={onClose}></button>
        <h2 className="modal__title">Registration Successfully Completed!</h2>
        <button className="modal__footer-link" type="button" onClick={onFooterLinkClick}>
              {footerLinkText}
            </button>
      </div>
    </div>
  );
}

export default RegistrationCompleteModal;