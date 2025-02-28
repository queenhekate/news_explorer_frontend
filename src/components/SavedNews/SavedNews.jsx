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
      <div className="savedNews__content">
        {savedArticles.length > 0 ? (
          savedArticles.map((card) => (
            <NewsCard
              key={card._id}
              card={card}
              onDeleteArticle={onDeleteArticle}
              showText={false}
              showButton={false}
              isLoggedIn={isLoggedIn}
            />
          ))
        ) : (
          <p className="savedNews__no-articles"></p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SavedNews;
