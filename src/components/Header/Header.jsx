import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleSearch, newsData, openLoginModal }) {
  return (
    <div className="header">
      <Navigation openLoginModal={openLoginModal} />
      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__description">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <SearchForm onSearch={handleSearch} />
      </div>
    </div>
  );
}

export default Header;