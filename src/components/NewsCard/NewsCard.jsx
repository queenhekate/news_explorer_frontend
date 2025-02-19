import React, { useState } from "react";
import "./NewsCard.css";
import Card from "../Card/Card";

function NewsCard() {

    const cards = [
        {
          id: 1,
          title: 'Card 1',
          description: 'This is the description of card 1.',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'This is the description of card 2.',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          title: 'Card 3',
          description: 'This is the description of card 3.',
          imageUrl: 'https://via.placeholder.com/150',
        },
        // Add more cards here
      ];

  return (
    <div className="newsCard">
      <p className="newsCard__text">Search Results</p>
      <div className="newsCard__list">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <button className="newsCard__btn">Show More</button>
    </div>
  );
}

export default NewsCard;
