import React, { useContext, useState } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import IsLoadingContext from "../context/IsLoadingContext";

function Main({ handleSearch, newsData }) {
  const { isLoading } = useContext(IsLoadingContext);
  return (
    <div className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__description">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <SearchForm onSearch={handleSearch} />
        {isLoading === false ? <NewsCard /> : <Preloader />}
      </div>
    </div>
  );
}

export default Main;
