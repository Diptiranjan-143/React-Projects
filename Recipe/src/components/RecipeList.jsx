import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

function RecipeList({ recipes, onRecipeClick }) {
  if (recipes.length === 0) {
    return (
      <div className="no-recipes">
        <p>No recipes found. Try a different search!</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe.recipe}
            onClick={() => onRecipeClick(recipe.recipe)}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;