import "./SearchForm.css";
import { useState } from "react";
//import {baseURL} from "../../utils/constants"; 

function SearchForm({onSearch}) {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle form submit (optional)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery)
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter topic"
          className="search-form__input"
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
      <div className="search-form__results"></div>
    </div>
  );
}

export default SearchForm;
