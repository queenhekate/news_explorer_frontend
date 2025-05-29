import React from "react";
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
  const handleDelete = (publishedAt) => {
    onDeleteArticle(publishedAt);
  };

  const handleSave = (card) => {
    const cardWithKeyword = { ...card, keyword: searchQuery };
    onSaveArticle(cardWithKeyword);
  };

  return (
    <div className="news-card">
      {showText && <p className="news-card__text">Search Results</p>}
      <div className="news-card__container">
        {Array.isArray(newsData) && newsData.length > 0 ? (
          newsData.slice(0, articlesToShow).map((card, index) => (
            <div className="news-card__list" key={index}>
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
                onDelete={() => handleDelete(card.publishedAt)}
                onSave={() => handleSave(card)}
                isLoggedIn={isLoggedIn}
                searchQuery={searchQuery}
              />
            </div>
          ))
        ) : (
          <p className="news-card__no-results"></p>
        )}
      </div>
      {showButton && articlesToShow < newsData.length && (
        <div className="news-card__btn-container ">
          <button className="news-card__btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsCard;
