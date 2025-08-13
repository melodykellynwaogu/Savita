import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import RecipeList from '../components/RecipeList';
import CartChat from '../components/CartChat';

function Home() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]); 

  const handleBuy = (item) => {
    setCart(prev => [...prev, item]);
  };

  const handleRemove = (id) => {
    if (id === null) {
        setCart([]);
    } else {
        setCart(prev => prev.filter(item => item.id !== id));
    
    }
  };


  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`
      );
      const data = await res.json();

      const recipesWithPrice = (data.results || []).map(recipe => ({
        ...recipe,
        price: (Math.random() * 15 + 5).toFixed(2),
      }));

      setRecipes(recipesWithPrice);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading && <p>Loading...🔃</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <RecipeList recipes={recipes} onBuy={handleBuy} />
      <CartChat cart={cart} onRemove={handleRemove} />
    </div>
  );
}

export default Home;