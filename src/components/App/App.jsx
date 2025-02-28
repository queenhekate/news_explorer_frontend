import React, { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
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
import RegistrationCompleteModal from "../RegistrationCompleteModal/RegistrationCompleteModal.jsx";
import newsApiBaseUrl from "../../utils/constants.js";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInLoading, setIsLoggedInLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

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

  const handleLogoutClick = () => {
    console.log("Logout button clicked");
    setCurrentUser(null); 
    navigate("/");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setHasSearch(true);
  };

  useEffect(() => {
    const fetchNewsData = async () => {
      setIsLoading(true);
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      const fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - 7);
      const toDate = new Date();
      const url = `${newsApiBaseUrl}?q=${searchQuery}&apiKey=${apiKey}&from=${fromDate.toISOString()}&to=${toDate.toISOString()}&pageSize=100`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      } finally {
        setIsLoading(false);
      }
    };

      if (searchQuery) {
        fetchNewsData();
      }
    }, [searchQuery]);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      // Simulate an API call to fetch user data
      const user = {
        _id: "123",
        email: "user@example.com",
        name: "Elise",
        username: "Elise",
        savedArticlesCount: 5,
        keywords: ["React", "JavaScript", "CSS", "HTML"],
      };
      setCurrentUser(user);
    };

    fetchUserData();
  }, []);

  return (
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="page">
          <div className="page__content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header 
                    openLoginModal={openLoginModal}
                    handleLogoutClick={handleLogoutClick}
                    handleSignInClick={openLoginModal} 
                    handleSearch={handleSearch}/>
                    <IsLoadingContext.Provider
                      value={{ isLoading, setIsLoading }}
                    >
                      <Main 
                      newsData={newsData}
                      isLoading={isLoading}
                      hasSearched={hasSearched} />
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
                    <ProtectedRoute>
                      <SavedNews />
                    </ProtectedRoute>
                  </>
                }
              />
            </Routes>
            <LoginModal
              isOpen={isLoginModalOpen}
              onClose={closeLoginModal}
              title="Sign In"
              buttonText="Sign In"
              onFooterLinkClick={openRegisterModal}
            />
            <RegisterModal
              isOpen={isRegisterModalOpen}
              onClose={closeRegisterModal}
              title="Sign Up"
              buttonText="Sign Up"
              onFooterLinkClick={openLoginModal}
            />
            <RegistrationCompleteModal onFooterLinkClick={openLoginModal} />
          </div>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
