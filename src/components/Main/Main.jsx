import React from "react";
import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import noResultsIcon from "../../assets/not-found.png";

function Main({ newsData, isLoading, hasSearched, errorMessage }) {
  const [articlesToShow, setArticlesToShow] = React.useState(3);

  if (!hasSearched) {
    return null;
  }

  const handleShowMore = () => {
    setArticlesToShow((prev) => prev + 3);
  };

  return (
    <div className="main">
      {isLoading ? (
        <div className="main__preloader-container">
          <Preloader />
        </div>
      ) : (
        <>
          {errorMessage && (
            <div className="main__error-message main__preloader-container">
              {errorMessage}
            </div>
          )}
          {hasSearched && newsData.length === 0 && (
            <div className="main__noResults main__preloader-container">
              <img
                src={noResultsIcon}
                alt="Nothing found"
                className="main__noResults-icon"
              />
              <h2>Nothing found</h2>
              <p className="main__noResults-text">
                Sorry, but nothing matched your search terms.
              </p>
            </div>
          )}
          {!errorMessage && newsData.length > 0 && (
            <NewsCard
              newsData={newsData}
              articlesToShow={articlesToShow}
              handleShowMore={handleShowMore}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Main;
