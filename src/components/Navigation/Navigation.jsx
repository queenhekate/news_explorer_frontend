import React, { useState, useEffect } from "react";
import "./Navigation.css";
import dropdownIcon from "../../assets/menu.png";
import ReusableButton from "../ReuseableButton/ReusableButton";
import closeIcon from "../../assets/close.png";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    setIsOpen((prevState) => !prevState);
    event.stopPropagation(); // Prevent event from propagating to the window click listener
  };

  const closeDropdown = (event) => {
    // Close dropdown if user clicks outside of the dropdown
    if (event.target.closest(".navigation") === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="navigation">
      <div className="navigation__buttons">
        <ReusableButton text="Home" className="navigation__home" />
        <ReusableButton text="Sign In" className="navigation__signin" />
      </div>

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
            <ReusableButton text="Sign In" className="navigation__signin" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
