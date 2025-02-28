import "./SearchForm.css";
import React, { useState } from "react";
import {baseURL} from "../../utils/constants"; 

function SearchForm({onSearch}) {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle form submit (optional)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    fetch(`${baseURL}/${searchQuery}`, {method: "GET"}).then((res) => res.json().then((data) => {console.log(data), onSearch(data)}))
    alert("Search submitted for: " + searchQuery); // You can replace this with actual search logic
  };

  return (
    <div className="searchForm">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter topic"
          className="searchForm__input"
        />
        <button type="submit" className="searchForm__button">
          Search
        </button>
      </form>
      <div className="searchForm__results">

      </div>
    </div>
  );
}

export default SearchForm;
