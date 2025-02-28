import React, {useState} from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleSearch, openLoginModal, handleLogoutClick, handleSignInClick, onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchInput);
  };
  
  return (
    <div className="header">
      <Navigation 
      openLoginModal={openLoginModal}
      handleLogoutClick={handleLogoutClick}
      handleSignInClick={handleSignInClick} />
      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__description">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <SearchForm onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Header;
