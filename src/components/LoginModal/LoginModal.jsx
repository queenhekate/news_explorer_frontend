// SignIn.js
import React, { useState } from 'react';
import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import RegisterModal from '../RegisterModal/RegisterModal';

const LoginModal = () => {
  // State to manage form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Reset error if validation passes
    setError('');

    // Logic for authentication (this is just a mockup, replace it with real authentication logic)
    console.log('Form submitted:', { email, password });
  };

//Handling opening the Registration Modal
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <ModalWithForm>
      <div className="login__box">
        <h2>Sign In</h2>
        {error && <div className="login__errorMessage">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="sign-in-button">Sign In</button>
          <div>
      <p>
        or <a href="#" onClick={handleOpenModal}>Sign Up</a>
      </p>
      {showModal && <RegisterModal />}
    </div>
        </form>
      </div>
      </ModalWithForm>
  );
};

export default LoginModal;
