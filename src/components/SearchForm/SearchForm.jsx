import React, { useState } from "react";
import './SearchForm.css'; // Assuming your styles are in App.css

function SearchForm() {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle form submit (optional)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    alert("Search submitted for: " + searchQuery); // You can replace this with actual search logic
  };

  return (
    <div className="searchForm">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
          className="searchForm__input"
        />
        <button type="submit" className="searchForm__button">
          Search
        </button>
      </form>
      <div className="searchForm__results">
        {/* Here you can display search results */}
        <p>Your search query: {searchQuery}</p>
      </div>
    </div>
  );
}

export default SearchForm;