import React, { useState } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main({handleSearch, newsData }) {
  return (
    <div className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__description">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <SearchForm onSearch={handleSearch} />
        <NewsCard />
      </div>
    </div>
  );
}

export default Main;
