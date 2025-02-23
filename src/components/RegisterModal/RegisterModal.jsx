import React from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function RegisterModal({ isOpen, onClose, buttonText, onFooterLinkClick })  {
  const { values, handleChange, errors } = useFormWithValidation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername]= useState(''); 
  const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Register submitted:", values);

         // Simple validation
    if (!email || !password || !username) {
      setError('Please enter email, password, and username.');
      return;
    }

        // Reset error if validation passes
        setError('');

        // Logic for authentication (this is just a mockup, replace it with real authentication logic)
        console.log('Form submitted:', { email, password, username });
      };

      console.log("RegisterModal isOpen:", isOpen);

//Handling opening the Login Modal
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  if (!isOpen) {
    return null;
  }

   return (
    <ModalWithForm 
    title="Sign Up"
    name="register"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    buttonText={buttonText}
    footerLinkText="Sign In"
    onFooterLinkClick={onFooterLinkClick}>
        <h2 className="modal__title">Sign Up</h2>
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
      <label className="modal__label">
        Username{" "}
        <input
          type="username"
          className="modal__input"
          name="username"
          placeholder="username"
          autoComplete="current-username"
          value={values.username}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      </ModalWithForm>
  );
};

export default RegisterModal;
