import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import IsLoadingContext from "../../context/IsLoadingContext.js";
import ProtectedRoute from "../ProtectedRoute.jsx";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInLoading, setIsLoggedInLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    email: "",
    name: "",
    username: "",
  });

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <Router>
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="page">
        <div className="page__content">
        <Routes>
          <Route 
           path="/"
           element={
            <>
          <Header openLoginModal={openLoginModal} />
          <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
          <Main newsData={newsData} />
          </IsLoadingContext.Provider>
          <About />
          <Footer />
          </>
           }
           />
          <Route
                path="/saved-news"
                element={
                  <>
                  <Navigation />
                  <ProtectedRoute>
                    <SavedNews />
                  </ProtectedRoute>
                  <Footer />
                  </>
                }
              />
        </Routes>
        <LoginModal
            isOpen={isLoginModalOpen}
            onClose={closeLoginModal}
            title="Sign In"
            buttonText="Sign Up"
            onFooterLinkClick={openRegisterModal}
          />
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={closeRegisterModal}
            title="Sign Up"
            buttonText="Sign In"
            onFooterLinkClick={openLoginModal}
          />
        </div>
      </div>
      </CurrentUserContext.Provider>
    </Router>
  );
}

export default App;
