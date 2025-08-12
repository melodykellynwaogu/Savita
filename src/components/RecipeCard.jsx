import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe, onBuy }) {
  return (
    <div
      className="card"
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        width: '200px',
      }}
    >
      <img
        className="image"
        src={recipe.image}
        alt={recipe.title}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3 className="title">{recipe.title}</h3>
      <p>Price: ${recipe.price}</p>
      <button onClick={() => onBuy(recipe)}>Buy</button>
    </div>
  );
}

export default RecipeCard;
