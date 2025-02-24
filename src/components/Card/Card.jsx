import React, { useState } from "react";
import "./Card.css";

function Card({ imageUrl, title, description }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="card">
      <button
        className={`card__save-btn ${isSaved ? "saved" : ""}`}
        onClick={handleSaveClick}
      ></button>
      <img src={imageUrl} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}

export default Card;