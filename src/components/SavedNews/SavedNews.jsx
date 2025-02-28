import React, { useContext } from "react";
import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import NewsCard from "../NewsCard/NewsCard";
import Footer from "../Footer/Footer";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function SavedNews({ savedArticles, onDeleteArticle, isLoggedIn }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="savedNews">
      <Navigation />
      <Profile />
      <NewsCard 
      onDeleteArticle={onDeleteArticle}
      showText={false} 
      showButton={false}
      isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
}

export default SavedNews;
