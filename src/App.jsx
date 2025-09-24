import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  return (
    <div className="app">
      <h1>Welcome to Vite React App</h1>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </div>
  );
}

export default App;