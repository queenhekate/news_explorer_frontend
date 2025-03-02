import { useState, useEffect } from "react";
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
import * as auth from "../../utils/auth.js";
import { baseURL, apiKey } from "../../utils/constants.js";

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
    username: "",
    savedArticles: [],
    keywords: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const navigate = useNavigate();

  // Modal Functionality

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

  // Functions

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

  // News API fetch

  useEffect(() => {
    const fetchNewsData = async () => {
      setIsLoading(true);
      const fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - 7);
      const toDate = new Date();
      const url = `${baseURL}?q=${searchQuery}&apiKey=${apiKey}&from=${fromDate.toISOString()}&to=${toDate.toISOString()}&pageSize=100`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json(); //checkResponse(response);  ??
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

  // User authentication

  const JWT_SECRET = "jwt";
  const setToken = (token) => localStorage.setItem(JWT_SECRET, token);
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
      setIsLoggedInLoading(false);
      return;
    }

    auth
      .getCurrentUser(jwt) //.checkToken(jwt) ??
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
        closeRegisterModal();
      })
      .catch(console.error);
  };

  function getUserData(token) {
    auth
      .getCurrentUser(token) //.checkToken(token) ??
      .then((userData) => {
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
        closeLoginModal();
      })
      .catch((err) => {
        console.error("Error logging user in:", err);
      })
      .finally(() => {
        setIsLoggedInLoading(false);
      });
  };

  const handleSaveArticle = (card) => {
    const cardWithKeyword = { ...card, keyword: searchQuery };
    setSavedArticles((prevCards) => [...prevCards, cardWithKeyword]);
  };

  const handleDeleteArticle = (publishedAt) => {
    setSavedArticles(
      (prevCards) =>
        prevCards.filter((card) => card.publishedAt !== publishedAt) //need to change Id to Published At
    );
  };

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch("/api/user");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch user data");
  //       }
  //       const user = await checkResponse(response);
  //       setCurrentUser(user);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
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
                    onSearch={handleSearch}
                    currentUser={currentUser}
                    isLoggedIn={isLoggedIn}
                    isLoggedInLoading={isLoggedInLoading}
                  />
                  <IsLoadingContext.Provider
                    value={{ isLoading, setIsLoading }}
                  >
                    <Main
                      newsData={newsData}
                      searchQuery={searchQuery}
                      isLoading={isLoading}
                      hasSearched={hasSearched}
                      errorMessage={errorMessage}
                      onSaveArticle={handleSaveArticle}
                      onDeleteArticle={handleDeleteArticle}
                      savedArticles={savedArticles}
                      isLoggedIn={isLoggedIn}
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
                    <SavedNews
                      savedArticles={savedArticles}
                      onDeleteArticle={handleDeleteArticle}
                      isLoggedIn={isLoggedIn}
                      newsData={newsData}
                      searchQuery={searchQuery}
                    />
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
            onSignIn={handleLogin}
            onFooterLinkClick={openRegisterModal}
          />
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={closeRegisterModal}
            title="Sign Up"
            buttonText="Sign Up"
            onSignUp={handleRegistration}
            onFooterLinkClick={openLoginModal}
          />
          <RegistrationCompleteModal onFooterLinkClick={openLoginModal} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
