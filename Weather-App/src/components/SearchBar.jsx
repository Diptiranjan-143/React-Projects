import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  const popularCities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Dubai'];

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a city..."
          className="search-input"
        />
        <button type="submit" className="search-btn">
          🔍
        </button>
      </form>
      
      <div className="popular-cities">
        <span>Popular: </span>
        {popularCities.map(city => (
          <button
            key={city}
            onClick={() => onSearch(city)}
            className="city-btn"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;