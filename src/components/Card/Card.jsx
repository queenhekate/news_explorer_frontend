import React from "react";
import "./Card.css";

function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <div>
      <button className="card__save-btn"></button>
      {imageUrl && <img src={imageUrl} alt={title} className="card__image" />}
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
