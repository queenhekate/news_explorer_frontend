import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Card.css";

function Card({
  title,
  description,
  imageUrl,
  date,
  source,
  onDelete,
  onSave,
  isLoggedIn,
  keyword,
  searchQuery,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const handleSaveClick = () => {
    if (!isLoggedIn) {
      console.log("User is not logged in");
      return;
    }
    if (isSavedNewsPage) {
      onDelete();
    } else {
      setIsSaved(!isSaved);
      onSave({
        title,
        description,
        imageUrl,
        keyword: searchQuery,
        date,
        source,
      });
    }
  };

  return (
    <div className="card">
      {isSavedNewsPage && <p className="card__keyword">{keyword}</p>}
      <button
        className={`card__btn 
                  ${isSavedNewsPage ? "card__delete-btn" : "card__save-btn"} 
                ${isSaved ? "saved" : ""}
                ${isLoggedIn ? "card__save-btn--no-hover" : ""}`}
        onClick={handleSaveClick}
      ></button>
      <img src={imageUrl} alt={title} className="card__image" />
      <div className="card__content">
        <p className="card__date">{date}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <p className="card__source">{source}</p>
      </div>
    </div>
  );
}

export default Card;
