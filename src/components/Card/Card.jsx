import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Card.css";

function Card({ urlToImage, title, description, keyword, publishedAt, source, onDelete }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const handleSaveClick = () => {
    if (isSavedNewsPage) {
      onDelete();
    } else {
      setIsSaved(!isSaved);
    }
  };

  return (
    <div className="card">
      {isSavedNewsPage && <p className="card__keyword">{keyword}</p>}
      <button
                className={`card__btn 
                  ${isSavedNewsPage ? "card__delete-btn" : "card__save-btn"} 
                ${isSaved ? "saved" : ""}`}
        onClick={handleSaveClick}
      >
      </button>
      <img src={urlToImage} alt={title} className="card__image" />
      <div className="card__content">
        <p className="card__date">{new Date(publishedAt).toLocaleDateString()}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <p className="card__source">{source.name}</p>
      </div>
    </div>
  );
}

export default Card;