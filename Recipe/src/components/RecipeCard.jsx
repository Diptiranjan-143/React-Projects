import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe, onClick }) {
  const formatTime = (time) => {
    if (!time) return 'N/A';
    return `${time} min`;
  };

  const getHealthLabels = () => {
    return recipe.healthLabels.slice(0, 3).map((label, index) => (
      <span key={index} className="health-label">
        {label}
      </span>
    ));
  };

  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.label} />
        <div className="recipe-overlay">
          <span className="view-btn">View Recipe →</span>
        </div>
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.label}</h3>
        
        <div className="recipe-meta">
          <div className="meta-item">
            <span className="meta-icon">⏱️</span>
            <span>{formatTime(recipe.totalTime)}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">👥</span>
            <span>{recipe.yield} servings</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">🔥</span>
            <span>{Math.round(recipe.calories / recipe.yield)} cal/serving</span>
          </div>
        </div>
        
        <div className="recipe-cuisines">
          {recipe.cuisineType && recipe.cuisineType.map((cuisine, index) => (
            <span key={index} className="cuisine-tag">
              {cuisine}
            </span>
          ))}
          {recipe.mealType && recipe.mealType.map((meal, index) => (
            <span key={index} className="meal-tag">
              {meal}
            </span>
          ))}
        </div>
        
        <div className="health-labels">
          {getHealthLabels()}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;