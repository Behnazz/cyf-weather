import React from "react";
import "./searchCity.css";

const SearchCity = props => {
  return (
    <div className="app__header">
      <input
        className="searchInput"
        type="text"
        placeholder="city"
        value={props.inputValue}
        onChange={props.inputChange}
      />
      <button className="searchButton" onClick={props.search}>
        Find Weather
      </button>
    </div>
  );
};

export default SearchCity;
