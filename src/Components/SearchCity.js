import React from "react";

const SearchCity = () => {
  return (
    <div className="app__header">
      <input
        className="searchInput"
        type="text"
        placeholder="city"
        name="city"
      />
      <button className="searchButton">Find Weather</button>
    </div>
  );
};

export default SearchCity;
