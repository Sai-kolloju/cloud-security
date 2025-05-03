import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  // Example of making a fetch request to an API (can be replaced with your backend API)
  useEffect(() => {
    fetch('/api/hello')  // This is just an example; update with actual API endpoint if needed
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Sai kolloju app</h1>
      <p>{message || 'Loading message from server...'}</p>
    </div>
  );
}

export default App;
