import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import SearchFilters from './components/SearchFilters';
import RecipeModal from './components/RecipeModal';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filters, setFilters] = useState({
    cuisine: '',
    diet: '',
    maxReadyTime: '',
    type: ''
  });

  const APP_ID = 'YOUR_APP_ID'; // From Edamam API
  const APP_KEY = 'YOUR_API_KEY'; // From Edamam API

  const fetchRecipes = async (query = 'chicken') => {
    setLoading(true);
    try {
      let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
      
      // Add filters to URL
      if (filters.cuisine) url += `&cuisineType=${filters.cuisine}`;
      if (filters.diet) url += `&diet=${filters.diet}`;
      if (filters.maxReadyTime) url += `&time=${filters.maxReadyTime}`;
      if (filters.type) url += `&mealType=${filters.type}`;

      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [filters]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchRecipes(searchQuery);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1 className="app-title">🍳 Recipe Finder</h1>
        <p className="app-subtitle">Discover delicious recipes from around the world</p>
      </header>

      <div className="main-content">
        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for recipes (e.g., pasta, chicken, vegetarian)..."
              className="search-input"
            />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
          
          <SearchFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        {loading ? (
          <div className="loading">Loading recipes...</div>
        ) : (
          <RecipeList 
            recipes={recipes}
            onRecipeClick={openRecipeModal}
          />
        )}
      </div>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={closeRecipeModal}
        />
      )}
    </div>
  );
}

export default App;