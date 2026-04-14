import "./App.css";

function App() {
  const workflow = [
    {
      tone: "develop",
      title: "Develop",
      summary:
        "Build interface slices in React with Vite HMR and instant API proxying.",
      command: "npm run dev:client",
    },
    {
      tone: "preview",
      title: "Preview",
      summary:
        "Validate Express routes and JSON contracts before shipping features.",
      command: "npm run dev:server",
    },
    {
      tone: "ship",
      title: "Ship",
      summary:
        "Launch frontend and backend together from one orchestrated command.",
      command: "npm run dev",
    },
  ];

  const foundations = [
    {
      title: "Client Surface",
      detail:
        "React entrypoint, route-ready shell, and utility-first API integration path.",
      anchor: "client/src/",
    },
    {
      title: "Server Core",
      detail:
        "Express layers for routes, controllers, services, config, and middleware.",
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
    { label: "React Docs", href: "https://react.dev/learn" },
    { label: "Express Docs", href: "https://expressjs.com/" },
    { label: "MongoDB Docs", href: "https://www.mongodb.com/docs/" },
  ];

  return (
    <main className="studio-shell">
      <header className="studio-hero">
        <p className="studio-kicker">MERN STACK</p>
        <h1>Deploy-Ready Full-Stack Foundation</h1>
        <p>
          A Vercel-inspired baseline for building production-grade web products:
          clear boundaries, concise commands, and fast iteration from day one.
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
