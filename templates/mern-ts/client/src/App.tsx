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
      .catch(() => setMessage("API not reachable — start the server"));
  }, []);

  return (
    <div className="app">
      <h1>Welcome to your MERN app</h1>
      <p className="status">{message || "Loading…"}</p>
    </div>
  );
}

export { App as default };
