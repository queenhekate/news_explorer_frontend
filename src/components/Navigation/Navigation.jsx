import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import dropdownIconHome from "../../assets/menu-white.svg";
import dropdownIcon from "../../assets/menu-black.svg";
import ReusableButton from "../ReuseableButton/ReusableButton";
import closeIcon from "../../assets/close-white.svg";
import logoutIcon from "../../assets/logout-black.svg";
import logoutIconHome from "../../assets/logout-white.svg";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Navigation({ handleLogoutClick, handleSignInClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  console.log(currentUser);
  console.log(isLoggedIn);
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
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link-active" : ""}`
            }
          >
            <ReusableButton
              text="Home"
              className={`navigation__home ${
                isSavedNewsPage ? "navigation__saved-news_buttons" : ""
              }`}
            />
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              exact
              to="/saved-news"
              className={({ isActive }) =>
                `navigation__link ${
                  isActive ? "navigation__link-active" : ""
                } ${isSavedNewsPage ? "navigation__link-active_saved" : ""}`
              }
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
          {isLoggedIn ? (
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
        <img
          src={isSavedNewsPage ? dropdownIcon : dropdownIconHome}
          alt="Menu"
          className="navigation__menu-image"
        />
      </button>

      {/* Dropdown Menu Items */}
      {isOpen && (
        <div className="navigation__dropdown-content">
          <div className="navigation__dropdown-header">
            <NavLink exact to="/" className="navigation__logo-link">
              <p className="navigation__logo">NewsExplorer</p>
            </NavLink>
            <button className="navigation__close" onClick={toggleDropdown}>
              <img
                src={closeIcon}
                alt="Close"
                className="navigation__close-image"
              />
            </button>
          </div>
          <div className="navigation__dropdown-container">
            <div className="navigation__dropdown-links">
              <NavLink
                exact
                to="/"
                className="navigation__link"
                onClick={toggleDropdown}
              >
                <ReusableButton text="Home" className="navigation__home" />
              </NavLink>
              {/* {isLoggedIn && (
                <NavLink exact to="/saved-news">
                  <ReusableButton
                    text="Saved Articles"
                    className="navigation__saved"
                    onClick={toggleDropdown}
                  />
                </NavLink>
              )} */}
            </div>
            {!isLoggedIn ? (
              <ReusableButton
                text="Sign In"
                className="navigation__signin"
                onClick={handleSignInClick}
              />
            ) : (
              <ReusableButton
                text="Sign Out"
                className="navigation__signin"
                onClick={handleLogoutClick}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
