import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import IsLoadingContext from "../context/IsLoadingContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";

function App({}) {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
 const [activeModal, setActiveModal] = useState("");
 
 const handleLoginModal = () => handleOpenModal("login")
 

  useEffect(() => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      fetchData();
    }, 2000); // 2 seconds delay to simulate loading
  }, []);

const handleOpenModal = (modal) => {
setActiveModal(modal) 
  }

  const fetchData = async () => {
    // Simulate fetching data
    // You can replace this with your actual API call, like:
    // const response = await fetch('https://api.example.com');
    // const result = await response.json();

    // For this example, we directly set the data
    const result = [
      { id: 1, title: "News 1", description: "Description of News 1" },
      { id: 2, title: "News 2", description: "Description of News 2" },
    ];

    setNewsData(result);
    setLoading(false); // Set loading to false when data is fetched
  };

  // function handleSearch(data) {
  //   setNewsData(data)
  // }

  return (
    <Router>
      <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <div className="page">
          <div className="page__content">
            <Header />
            <Main />
            <About />
            <SavedNews />
            <Footer />
            { activeModal==="login"&&(
            <LoginModal 
            isOpen={handleLoginModal}/>
          )}
          </div>
          <Routes>
            {/* Define your routes */}
            <Route path="/" exact component={Main} />
            <Route path="/saved-news" component={SavedNews} />
          </Routes>
        </div>
      </IsLoadingContext.Provider>
    </Router>
  );
}

export default App;
