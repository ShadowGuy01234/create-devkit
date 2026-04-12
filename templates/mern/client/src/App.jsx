import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('API not reachable — start the server'));
  }, []);

  return (
    <div className="app">
      <h1>Welcome to your MERN app</h1>
      <p className="status">{message || 'Loading…'}</p>
    </div>
  );
}

export { App as default };
