import React from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal"

function RegisterModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername]= useState(''); 
  const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();

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

//Handling opening the Login Modal
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

   return (
    <ModalWithForm>
      <div className="register__box">
        <h2>Sign In</h2>
        {error && <div className="register__errorMessage">{error}</div>}
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

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="sign-up-button">Sign Up</button>
          <div>
      <p>
        or <a href="#" onClick={handleOpenModal}>Sign In</a>
      {showModal && <LoginModal />}
      </p>
    </div>
        </form>
      </div>
      </ModalWithForm>
  );
};

export default RegisterModal;
