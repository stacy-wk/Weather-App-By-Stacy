import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input); // Sends the search city to App.jsx
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter a city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;

