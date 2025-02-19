import React from 'react';
import './ModalWithForm.css';
import closeBtn from "../../assets/close.png"

function ModalWithForm({ isOpen, closeModal }) {
  if (!isOpen) return null;  // If modal is not open, don't render anything

  return (
    <div className="modal__overlay" onClick={closeModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close-btn" onClick={closeModal}>
          <img src={closeBtn} alt="Close Button" className="modal__close-img" />
          </button>
      </div>
    </div>
  );
}

export default ModalWithForm;