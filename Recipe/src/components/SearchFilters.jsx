import React, { useState } from 'react';
import './SearchFilters.css';

const cuisineOptions = [
  'American', 'Asian', 'British', 'Caribbean', 'Chinese', 'French',
  'Indian', 'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Thai'
];

const dietOptions = [
  'balanced', 'high-protein', 'high-fiber', 'low-fat', 'low-carb', 'low-sodium'
];

const mealTypeOptions = [
  'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'
];

function SearchFilters({ filters, onFilterChange }) {
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    onFilterChange({
      cuisine: '',
      diet: '',
      maxReadyTime: '',
      type: ''
    });
  };

  return (
    <div className="filters-container">
      <button 
        className="toggle-filters-btn"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? '▲ Hide Filters' : '▼ Show Filters'}
      </button>

      {showFilters && (
        <div className="filters-grid">
          <div className="filter-group">
            <label>Cuisine Type</label>
            <select 
              value={filters.cuisine}
              onChange={(e) => handleFilterChange('cuisine', e.target.value)}
              className="filter-select"
            >
              <option value="">All Cuisines</option>
              {cuisineOptions.map(cuisine => (
                <option key={cuisine} value={cuisine.toLowerCase()}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Diet</label>
            <select 
              value={filters.diet}
              onChange={(e) => handleFilterChange('diet', e.target.value)}
              className="filter-select"
            >
              <option value="">Any Diet</option>
              {dietOptions.map(diet => (
                <option key={diet} value={diet}>
                  {diet.charAt(0).toUpperCase() + diet.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Meal Type</label>
            <select 
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value.toLowerCase())}
              className="filter-select"
            >
              <option value="">Any Meal</option>
              {mealTypeOptions.map(type => (
                <option key={type} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Max Cooking Time (min)</label>
            <input
              type="number"
              value={filters.maxReadyTime}
              onChange={(e) => handleFilterChange('maxReadyTime', e.target.value)}
              placeholder="e.g., 30"
              className="filter-input"
              min="0"
            />
          </div>

          <button 
            onClick={clearFilters}
            className="clear-filters-btn"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchFilters;