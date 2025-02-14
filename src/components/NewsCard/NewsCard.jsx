import React, { useState } from "react";
import "./NewsCard.css";
import Card from "../Card/Card";

function NewsCard() {
  return (
    <div className="newsCard">
      <p className="newsCard__text">Search Results</p>
      <div className="newsCard__list">
        {Card.map((Card) => (
          <Card
            key={Card.id}
            title={Card.title}
            description={Card.description}
            imageUrl={Card.imageUrl}
          />
        ))}
      </div>
      <button className="newsCard__btn">Show More</button>
    </div>
  );
}

export default NewsCard;
