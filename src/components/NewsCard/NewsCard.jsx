import React, { useState } from "react";
import "./NewsCard.css";
import Card from "../Card/Card";


function NewsCard({ newsData, articlesToShow, handleShowMore, showText = true, showButton = true }) {

  const handleDelete = (id) => {
    setSavedArticles(savedArticles.filter((article) => article.id !== id));
  };

  return (
    <div className="newsCard">
      <div className="newsCard__container">
        {showText && <p className="newsCard__text">Search Results</p>}
        {Array.isArray(newsData) && newsData.length > 0 ? (
    newsData.slice(0, articlesToShow).map((card, index) => (
        <div className="newsCard__list" key={index}>
          {/* {newsData.slice(0, articlesToShow).map((card, index) => ( */}
            <Card
              title={card.title}
              description={card.description}
              imageUrl={card.urlToImage}
              keyword={card.keyword} // Assuming keyword is part of the card data
              date={new Date(card.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              source={card.source.name}
              onDelete={() => handleDelete(card.id)} //check validity of card.id
            />
        </div>
      ))
    ) : (
      <p className="newsCard__no-results"></p>
    )}
        {showButton && articlesToShow < newsData.length && (
          <div className="newsCard__btn-container">
            <button className="newsCard__btn" onClick={handleShowMore}>Show More</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
