import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

function RecipeList({ recipes, onBuy }) {
  if (!recipes.length) return <p>No recipes found</p>;

  return (
    <div className="list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onBuy={onBuy} />
      ))}
    </div>
  );
}

export default RecipeList;
