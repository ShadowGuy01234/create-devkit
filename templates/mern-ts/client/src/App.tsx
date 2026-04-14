import "./App.css";

function App() {
  const workflow = [
    {
      tone: "develop",
      title: "Develop",
      summary:
        "Implement typed React surfaces with immediate HMR and API-forward proxying.",
      command: "npm run dev:client",
    },
    {
      tone: "preview",
      title: "Preview",
      summary:
        "Exercise typed server handlers and payload contracts before release.",
      command: "npm run dev:server",
    },
    {
      tone: "ship",
      title: "Ship",
      summary:
        "Execute both processes from one command through concurrently orchestration.",
      command: "npm run dev",
    },
  ];

  const foundations = [
    {
      title: "Typed Client Layer",
      detail:
        "Type-safe component foundation for fast feature composition and safer refactors.",
      anchor: "client/src/",
    },
    {
      title: "Service-Oriented API",
      detail:
        "Express structure with isolated routes, controllers, services, and utility modules.",
      anchor: "server/src/",
    },
  ];

  const setupSteps = [
    "npm install",
    "npm run setup",
    "cp server/.env.example server/.env",
    "npm run dev",
  ];

  const resources = [
    { label: "React + TS", href: "https://react.dev/learn/typescript" },
    { label: "TypeScript Docs", href: "https://www.typescriptlang.org/docs/" },
    { label: "Express Docs", href: "https://expressjs.com/" },
  ];

  return (
    <main className="studio-shell">
      <header className="studio-hero">
        <p className="studio-kicker">MERN STACK + TYPESCRIPT</p>
        <h1>Type-Safe Product Delivery Baseline</h1>
        <p>
          A restrained, infrastructure-first launchpad tuned for strict typing,
          reliable iteration loops, and production-minded velocity.
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
