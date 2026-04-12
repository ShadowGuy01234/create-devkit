import { useState, useEffect } from "react";

type HealthResponse = {
  message?: string;
};

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data: HealthResponse) =>
        setMessage(data.message ?? "API is running"),
      )
      .catch(() => setMessage("API not reachable — start the backend"));
  }, []);

  return (
    <div className="app">
      <h1>FastAPI + React</h1>
      <p className="status">{message || "Loading…"}</p>
    </div>
  );
}

export { App as default };
