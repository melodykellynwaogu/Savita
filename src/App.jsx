import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>🍽 Savita Recipe App</h1>
      <Home />
      <footer style={{ marginTop: '2rem', padding: '1rem 0', borderTop: '1px solid #ddd', textAlign: 'center', color: '#666' }}>
        &copy; {new Date().getFullYear()} Savita Recipe App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
