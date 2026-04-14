import "./App.css";

function App() {
  const workflow = [
    {
      tone: "develop",
      title: "Develop",
      summary:
        "Compose typed React features with fast HMR and request forwarding ready by default.",
      command: "npm run dev:frontend",
    },
    {
      tone: "validate",
      title: "Validate",
      summary:
        "Iterate on FastAPI routes and schemas with isolated backend runtime control.",
      command: "npm run dev:backend",
    },
    {
      tone: "launch",
      title: "Launch",
      summary:
        "Run frontend and backend together through one concurrently-powered entrypoint.",
      command: "npm run dev",
    },
  ];

  const foundations = [
    {
      title: "Typed Frontend Surface",
      detail:
        "Type-safe React workspace for predictable UI delivery and safer refactors.",
      anchor: "frontend/src/",
    },
    {
      title: "Backend Domain Layer",
      detail:
        "FastAPI project split into api, core, models, schemas, and service modules.",
      anchor: "backend/app/",
    },
  ];

  const setupSteps = [
    "python -m venv backend/venv",
    "backend\\venv\\Scripts\\activate",
    "npm install",
    "npm run setup",
    "npm run dev",
  ];

  const resources = [
    { label: "FastAPI Docs", href: "https://fastapi.tiangolo.com/" },
    { label: "React + TS", href: "https://react.dev/learn/typescript" },
    { label: "TypeScript Docs", href: "https://www.typescriptlang.org/docs/" },
  ];

  return (
    <main className="studio-shell">
      <header className="studio-hero">
        <p className="studio-kicker">FASTAPI + REACT + TYPESCRIPT</p>
        <h1>Type-Safe Python API Baseline</h1>
        <p>
          A restrained, production-minded starter for teams shipping typed React
          interfaces backed by versioned FastAPI services.
        </p>
      </header>

      <section className="workflow-grid" aria-label="Workflow pipeline">
        {workflow.map((item) => (
          <article
            key={item.title}
            className="workflow-step"
            data-tone={item.tone}
          >
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <code>{item.command}</code>
          </article>
        ))}
      </section>

      <section className="foundation-grid" aria-label="Project foundations">
        {foundations.map((item) => (
          <article key={item.title} className="foundation-card">
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
            <code>{item.anchor}</code>
          </article>
        ))}
      </section>

      <section className="command-board" aria-label="Bootstrap commands">
        <h2>Bootstrap Commands</h2>
        <ol>
          {setupSteps.map((step) => (
            <li key={step}>
              <code>{step}</code>
            </li>
          ))}
        </ol>
      </section>

      <footer className="resource-row" aria-label="Documentation links">
        {resources.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
      </footer>
    </main>
  );
}

export default App;
