import './App.css'

function App() {
  const runbook = [
    'python -m venv backend/venv',
    'source backend/venv/bin/activate  # Windows: backend\\venv\\Scripts\\activate',
    'npm install',
    'npm run setup',
    'npm run dev',
  ]

  return (
    <main className="atlas-app">
      <header className="atlas-hero">
        <p className="atlas-tag">FASTAPI + REACT</p>
        <h1>API Flight Deck</h1>
        <p>
          A clean split between UI and backend, tuned for quick iterations with
          one orchestrated dev command.
        </p>
      </header>

      <section className="atlas-grid" aria-label="Environment panels">
        <article className="atlas-panel">
          <h2>Frontend</h2>
          <p>React + Vite serves your interface on port 5173.</p>
          <code>npm run dev:frontend</code>
        </article>
        <article className="atlas-panel">
          <h2>Backend</h2>
          <p>FastAPI serves versioned endpoints on port 5000.</p>
          <code>npm run dev:backend</code>
        </article>
        <article className="atlas-panel atlas-panel-accent">
          <h2>Joint Launch</h2>
          <p>Both services run in one terminal via concurrently.</p>
          <code>npm run dev</code>
        </article>
      </section>

      <section className="runbook" aria-label="Setup runbook">
        <h2>Setup Runbook</h2>
        <ol>
          {runbook.map((step) => (
            <li key={step}>
              <code>{step}</code>
            </li>
          ))}
        </ol>
      </section>

      <footer className="atlas-links" aria-label="Documentation links">
        <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
          FastAPI Docs
        </a>
        <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
          React Guide
        </a>
        <a href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
          Vite Guide
        </a>
      </footer>
    </main>
  )
}

export default App
