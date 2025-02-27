import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import dropdownIcon from "../../assets/menu.png";
import ReusableButton from "../ReuseableButton/ReusableButton";
import closeIcon from "../../assets/close.png";
import logoutIcon from "../../assets/logout.png";
import logoutIconHome from "../../assets/logout-white.png";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Navigation({ handleLogoutClick, handleSignInClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const location = useLocation();

  function toggleDropdown(event) {
    setIsOpen((prevState) => !prevState);
    event.stopPropagation();
  }

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

  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <div className="navigation">
      <NavLink exact to="/" className="navigation__logo-link">
        <p
          className={`navigation__logo ${
            isSavedNewsPage ? "navigation__saved-news_logo" : ""
          }`}
        >
          NewsExplorer
        </p>
      </NavLink>
      <ul className="navigation__buttons">
        <li>
          <NavLink exact to="/" activeClassName= 
          {`navigation__link-active ${isSavedNewsPage ? "navigation__link-active_saved" : ""}`}
          >
            <ReusableButton
              text="Home"
              className={`navigation__home ${
                isSavedNewsPage ? "navigation__saved-news_buttons" : ""
              }`}
            />
          </NavLink>
        </li>
        {currentUser && (
          <li>
            <NavLink
              exact
              to="/saved-news"
              activeClassName=
              {`navigation__link-active ${isSavedNewsPage ? "navigation__link-active_saved" : ""}`}
              >
              <ReusableButton
                text="Saved Articles"
                className={`navigation__saved ${
                  isSavedNewsPage ? "navigation__saved-news_buttons" : ""
                }`}
              />
            </NavLink>
          </li>
        )}
        <li>
          {currentUser ? (
            <div
              className={`navigation__signout-btn ${
                isSavedNewsPage ? "navigation__saved-news_signout" : ""
              }`}
            >
              <ReusableButton
                className={`navigation__signout ${
                  isSavedNewsPage ? "navigation__saved-news_signout-btn" : ""
                }`}
                text={currentUser.username}
                onClick={handleLogoutClick}
              />
              <img
                src={isSavedNewsPage ? logoutIcon : logoutIconHome}
                alt="Logout"
                className="navigation__signout-image"
              />
            </div>
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
