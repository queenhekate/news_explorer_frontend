import React, { useState } from "react";
import "./NewsCard.css";
import Card from "../Card/Card";
import Photo1 from "../../assets/baby-photo-1.jpg";
import Photo2 from "../../assets/baby-photo-2.jpg";
import Photo3 from "../../assets/baby-photo-3.jpg";

function NewsCard({ showText = true, showButton = true }) {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the description of card 1.",
      imageUrl: Photo1,
      keyword: "Baby",
      date: "April 23, 2015",
      source: "The New York Times",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the description of card 2.",
      imageUrl: Photo2,
      keyword: "Baby",
      date: "August 3, 2018",
      source: "The Guardian",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the description of card 3.",
      imageUrl: Photo3,
      keyword: "Baby",
      date: "March 31, 2021",
      source: "The Washington Post",
    },
    // Add more cards here
  ];

  const handleDelete = (id) => {
    setSavedArticles(savedArticles.filter((article) => article.id !== id));
  };

  return (
    <div className="newsCard">
      <div className="newsCard__container">
        {showText && <p className="newsCard__text">Search Results</p>}
        <div className="newsCard__list">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              keyword={card.keyword} // ?? get correct name for this
              date={card.date} // must be month 00, 0000
              source={card.source} //??? get correct name for this
              onDelete={() => handleDelete(card.id)}
            />
          ))}
        </div>
        {showButton && (
          <div className="newsCard__btn-container">
            <button className="newsCard__btn">Show More</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
