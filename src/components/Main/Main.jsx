import React from "react";
import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

function Main({ newsData, isLoading, hasSearched }) {
  if (!hasSearched) {
    return null; // Hide the main content until a search is made
  }
  return (
    <div className="main">
      {isLoading ? (
        <div className="main__preloader-container">
          <Preloader />
        </div>
      ) : (
        <>
          {hasSearched && newsData.length === 0 && (
            <div className="no-results">No results found</div>
          )}
          {newsData.length > 0 && (
            <div className="news-cards">
              {newsData.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Main;
