import React, { useState } from "react";
import "./NewsCard.css";
import Card from "../Card/Card";

function NewsCard({
  newsData,
  articlesToShow,
  handleShowMore,
  onDeleteArticle,
  onSaveArticle,
  isLoggedIn,
  searchQuery,
  showText = true,
  showButton = true,
}) {
  const handleDelete = (id) => {
    onDeleteArticle(id);
  };

  const handleSave = (card) => {
    onSaveArticle(card);
  };

  return (
    <div className="newsCard">
      {showText && <p className="newsCard__text">Search Results</p>}
      <div className="newsCard__container">
        {Array.isArray(newsData) && newsData.length > 0 ? (
          newsData.slice(0, articlesToShow).map((card, index) => (
            <div className="newsCard__list" key={index}>
              {/* {newsData.slice(0, articlesToShow).map((card, index) => ( */}
              <Card
                title={card.title}
                description={card.description}
                imageUrl={card.urlToImage}
                keyword={searchQuery}
                date={new Date(card.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                source={card.source.name}
                onDelete={() => handleDelete(card._id)}
                onSave={() => handleSave(card)}
                isLoggedIn={isLoggedIn}
              />
            </div>
          ))
        ) : (
          <p className="newsCard__no-results"></p>
        )}
      </div>
      {showButton && articlesToShow < newsData.length && (
        <div className="newsCard__btn-container">
          <button className="newsCard__btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsCard;
