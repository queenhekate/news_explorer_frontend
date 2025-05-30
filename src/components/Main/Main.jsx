import React from "react";
import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import noResultsIcon from "../../assets/not-found.svg";
import About from "../About/About";

function Main({
  newsData,
  isLoading,
  hasSearched,
  errorMessage,
  isLoggedIn,
  savedArticles,
  onSaveArticle,
  onDeleteArticle,
  searchQuery,
}) {
  const [articlesToShow, setArticlesToShow] = React.useState(3);

  const handleShowMore = () => {
    setArticlesToShow((prev) => prev + 3);
  };

  return (
    <>
    <div className="main">
      {isLoading ? (
        <div className="main__preloader-container">
          <Preloader />
        </div>
      ) : (
        <>
          {errorMessage ? (
            <div className="main__error-message main__preloader-container">
              {errorMessage}
            </div>
          ) : hasSearched && newsData.length === 0 ? (
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
          ) : (
            newsData.length > 0 && (
              <NewsCard
                newsData={newsData}
                searchQuery={searchQuery}
                articlesToShow={articlesToShow}
                handleShowMore={handleShowMore}
                isLoggedIn={isLoggedIn}
                savedArticles={savedArticles}
                onSaveArticle={onSaveArticle}
                onDeleteArticle={onDeleteArticle}
              />
            )
          )}
        </>
      )}
    </div>
    <About />
    </>
  );
}

export default Main;
