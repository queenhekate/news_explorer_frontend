import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import IsLoadingContext from "../../context/IsLoadingContext.js";
import MyProtectedRoute from "../ProtectedRoute.jsx";
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
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      fetchData();
    }, 2000); // 2 seconds delay to simulate loading
  }, []);

  const fetchData = async () => {
    // Simulate fetching data
    const result = [
      { id: 1, title: "News 1", description: "Description of News 1" },
      { id: 2, title: "News 2", description: "Description of News 2" },
    ];

    setNewsData(result);
    setLoading(false); // Set loading to false when data is fetched
  };

  return (
    <Router>
      <div className="page">
        <div className="page__content">
          <Header openLoginModal={openLoginModal} />
          <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <Main />
          </IsLoadingContext.Provider>
          <About />
          <SavedNews />
          <Footer />
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
        <Routes>
          <Route path="/" exact component={Main} />
          <Route path="/saved-news" component={SavedNews} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
