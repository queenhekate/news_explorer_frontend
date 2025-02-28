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
import * as auth from "../../utils/auth.js";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInLoading, setIsLoggedInLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    email: "",
    username: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogoutClick = () => {
    console.log("Logout button clicked");
    if (isLoggedIn) {
      removeToken();
      setIsLoggedIn(false);
      setCurrentUser(null);
      navigate("/");
    } else {
      console.err("Cannot be logged out");
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setHasSearched(true);
    setErrorMessage("");
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
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setErrorMessage(
          "Sorry, something went wrong during the request. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      fetchNewsData();
    }
  }, [searchQuery]);

  const JWT_SECRET = "jwt";
  // with localStorage the key TOKEN_KEY.
  const setToken = (token) => localStorage.setItem(JWT_SECRET, token);
  // getToken retrieves and returns the value associated with TOKEN_KEY from localStorage.
  const getToken = () => {
    return localStorage.getItem(JWT_SECRET);
  };

  const removeToken = () => {
    return localStorage.removeItem(JWT_SECRET);
  };

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      console.log("No token found in local storage");
      return;
    }

    auth
      .getCurrentUser(jwt)
      .then((data) => {
        setIsLoggedInLoading(false);
        setIsLoggedIn(true);
        setCurrentUser(data);
      })
      .catch((error) => {
        console.error("Invalid token:", error);
        removeToken();
        setIsLoggedInLoading(false);
      });
  }, []);

  const handleRegistration = (email, password, username) => {
    auth
      .register(email, password, username)
      .then(() => {
        handleLogin(email, password);
        closeActiveModal();
      })
      .catch(console.error);
  };

  function getUserData(token) {
    // use the token from the local storage
    auth
      .getCurrentUser(token)
      // fetch the data from the api
      .then((userData) => {
        // set the currentUser in this function, not on the login function
        setCurrentUser({
          _id: userData._id,
          email: userData.email,
          username: userData.username,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleLogin = (email, password) => {
    if (!email || !password) {
      return;
    }
    auth
      .login(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);
          getUserData(data.token);
        } else {
          console.error("No JWT token found.");
        }
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Error logging user in:", err);
      })
      .finally(() => {
        setIsLoggedInLoading(false);
      });
  };

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const user = {
  //       _id: {user.id},
  //       email: {user.email},
  //       name: {user.name},
  //       username: {user.username},
  //       savedArticlesCount: {user.savedArticlesCount},
  //       keywords: [user.keywords],
  //     };
  //     setCurrentUser(user);
  //   };

  //   fetchUserData();
  // }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, isLoggedIn }}
    >
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
                    handleSearch={handleSearch}
                  />
                  <IsLoadingContext.Provider
                    value={{ isLoading, setIsLoading }}
                  >
                    <Main
                      newsData={newsData}
                      isLoading={isLoading}
                      hasSearched={hasSearched}
                      errorMessage={errorMessage}
                    />
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
