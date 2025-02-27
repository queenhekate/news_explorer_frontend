import React, { useContext } from "react";
import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import NewsCard from "../NewsCard/NewsCard";
import Footer from "../Footer/Footer";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function SavedNews({}) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="savedNews">
      <Navigation />
      <Profile />
      <NewsCard showText={false} showButton={false} />
      <Footer />
    </div>
  );
}

export default SavedNews;
