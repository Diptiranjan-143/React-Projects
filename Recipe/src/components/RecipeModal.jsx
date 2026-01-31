import React from 'react';
import './RecipeModal.css';

function RecipeModal({ recipe, onClose }) {
  const formatIngredients = () => {
    return recipe.ingredientLines.map((ingredient, index) => (
      <li key={index} className="ingredient-item">
        {ingredient}
      </li>
    ));
  };

  const formatNutrients = () => {
    const nutrients = ['ENERC_KCAL', 'FAT', 'CHOCDF', 'PROCNT', 'FIBTG'];
    return nutrients.map((nutrient, index) => {
      const nutrientData = recipe.totalNutrients[nutrient];
      if (!nutrientData) return null;
      
      return (
        <div key={index} className="nutrient-item">
          <span className="nutrient-name">{nutrientData.label}:</span>
          <span className="nutrient-value">
            {Math.round(nutrientData.quantity)} {nutrientData.unit}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <img src={recipe.image} alt={recipe.label} className="modal-image" />
          <div className="modal-title-section">
            <h2>{recipe.label}</h2>
            <p className="recipe-source">Source: {recipe.source}</p>
            <div className="modal-tags">
              {recipe.cuisineType && recipe.cuisineType.map((cuisine, index) => (
                <span key={index} className="tag">{cuisine}</span>
              ))}
              {recipe.mealType && recipe.mealType.map((meal, index) => (
                <span key={index} className="tag">{meal}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="recipe-stats">
            <div className="stat">
              <span className="stat-label">Servings</span>
              <span className="stat-value">{recipe.yield}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Prep Time</span>
              <span className="stat-value">{recipe.totalTime || 'N/A'} min</span>
            </div>
            <div className="stat">
              <span className="stat-label">Calories</span>
              <span className="stat-value">{Math.round(recipe.calories)} cal</span>
            </div>
          </div>

          <div className="recipe-sections">
            <div className="section">
              <h3>Ingredients</h3>
              <ul className="ingredients-list">
                {formatIngredients()}
              </ul>
            </div>

            <div className="section">
              <h3>Nutrition Facts (Total)</h3>
              <div className="nutrients-grid">
                {formatNutrients()}
              </div>
            </div>

            <div className="section">
              <h3>Health Labels</h3>
              <div className="health-labels-grid">
                {recipe.healthLabels.map((label, index) => (
                  <span key={index} className="health-label">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <a 
              href={recipe.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-btn"
            >
              View Full Recipe
            </a>
            <button className="action-btn secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;