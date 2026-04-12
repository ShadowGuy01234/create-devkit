import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('API not reachable — start the backend'));
  }, []);

  return (
    <div className="app">
      <h1>FastAPI + React</h1>
      <p className="status">{message || 'Loading…'}</p>
    </div>
  );
}

export { App as default };
