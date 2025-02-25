import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import dropdownIcon from "../../assets/menu.png";
import ReusableButton from "../ReuseableButton/ReusableButton";
import closeIcon from "../../assets/close.png";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Navigation({ openLoginModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

  const toggleDropdown = (event) => {
    setIsOpen((prevState) => !prevState);
    event.stopPropagation();
  };

  const closeDropdown = (event) => {
    if (event.target.closest(".navigation") === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  const handleSignInClick = () => {
    console.log("Sign In button clicked");
    openLoginModal(); 
  };

  return (
    <div className="navigation">
      <NavLink exact to="/" className="navigation__logo-link">
        <p className="navigation__logo">NewsExplorer</p>
      </NavLink>
      <ul className="navigation__buttons">
        <li>
        <NavLink exact to="/" activeClassName="navigation__link-active">
            <ReusableButton text="Home" className="navigation__home" />
          </NavLink>
        </li>
        {currentUser && (
          <li>
            <NavLink
              exact
              to="/saved-news"
              activeClassName="navigation__link-active"
            >
              <ReusableButton text="Saved Articles" className="navigation__saved" />
            </NavLink>
          </li>
        )}
        <li>
          {currentUser ? (
            <span className="navigation__username">{currentUser.username}</span> 
          ) : (
          <ReusableButton
            text="Sign In"
            className="navigation__signin"
            onClick={handleSignInClick}
          />
        )}
        </li>
      </ul>

      {/* Dropdown Menu Button for Small Screens */}
      <button className="navigation__dropdown" onClick={toggleDropdown}>
        <img src={dropdownIcon} alt="Menu" className="navigation__menu-image" />
      </button>

      {/* Dropdown Menu Items */}
      {isOpen && (
        <div className="navigation__dropdown-content">
          <div className="navigation__dropdown-header">
            <button className="navigation__close" onClick={toggleDropdown}>
              <img
                src={closeIcon}
                alt="Close"
                className="navigation__close-image"
              />
            </button>
          </div>
          <div className="navigation__dropdown-container">
            <ReusableButton text="Home" className="navigation__home" />
            <ReusableButton
              text="Sign In"
              className="navigation__signin"
              onClick={handleSignInClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
