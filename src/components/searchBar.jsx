import React from 'react';
import './Input.css';

function SearchBar({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..." required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
