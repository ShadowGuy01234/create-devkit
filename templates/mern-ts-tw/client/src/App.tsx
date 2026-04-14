import "./App.css";

function App() {
  const launchSteps = [
    "npm install",
    "npm run setup",
    "cp server/.env.example server/.env",
    "npm run dev",
  ];

  return (
    <main className="forge-app">
      <div className="halo halo-top" aria-hidden="true"></div>
      <div className="halo halo-bottom" aria-hidden="true"></div>

      <header className="forge-hero">
        <p className="forge-label">MERN STACK</p>
        <h1>Your Full-Stack Forge Is Online</h1>
        <p>
          React runs the interface, Express powers the API, and MongoDB models
          are ready for your first feature.
        </p>
      </header>

      <section className="status-grid" aria-label="Stack status">
        <article className="status-card">
          <h2>Frontend</h2>
          <p>Vite dev server with /api proxy preconfigured.</p>
          <code>npm run dev:client</code>
        </article>
        <article className="status-card">
          <h2>Backend</h2>
          <p>Express API with layered folder structure and watch mode.</p>
          <code>npm run dev:server</code>
        </article>
        <article className="status-card">
          <h2>Orchestrator</h2>
          <p>Run both services together through concurrently.</p>
          <code>npm run dev</code>
        </article>
      </section>

      <section className="launch-board" aria-label="Launch sequence">
        <h2>Launch Sequence</h2>
        <ol>
          {launchSteps.map((step) => (
            <li key={step}>
              <code>{step}</code>
            </li>
          ))}
        </ol>
      </section>

      <nav className="resource-links" aria-label="Documentation links">
        <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
          React Guide
        </a>
        <a
          href="https://expressjs.com/en/starter/installing.html"
          target="_blank"
          rel="noreferrer"
        >
          Express Docs
        </a>
        <a href="https://mongoosejs.com/docs/" target="_blank" rel="noreferrer">
          Mongoose Models
        </a>
      </nav>
    </main>
  );
}

export default App;
