import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import IsLoadingContext from "../context/IsLoadingContext";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
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
      <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <div className="page">
          <div className="page__content">
            <Header openLoginModal={openLoginModal} />
            <Main />
            <About />
            <SavedNews />
            <Footer />
            <LoginModal
              isOpen={isLoginModalOpen}
              closeModal={closeLoginModal}
              buttonText="Sign in"
            />
             <RegisterModal
              isOpen={isRegisterModalOpen}
              onClose={closeRegisterModal}
              buttonText="Sign up"
              onFooterLinkClick={openLoginModal}
            />
          </div>
          <Routes>
            <Route path="/" exact component={Main} />
            <Route path="/saved-news" component={SavedNews} />
          </Routes>
        </div>
      </IsLoadingContext.Provider>
    </Router>
  );
}

export default App;