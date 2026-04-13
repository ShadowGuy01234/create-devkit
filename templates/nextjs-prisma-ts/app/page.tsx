export default function Home() {
  const bootstrapPath = [
    "npm install",
    "cp .env.example .env",
    "npx prisma generate",
    "npm run dev",
  ];

  return (
    <main className="prisma-shell">
      <section className="prisma-hero">
        <p className="prisma-kicker">NEXT.JS + PRISMA</p>
        <h1>Data Model Workshop</h1>
        <p>
          Build pages fast while Prisma keeps your data layer clean, typed, and
          migration-ready.
        </p>
      </section>

      <section className="prisma-grid" aria-label="Workspace overview">
        <article className="prisma-card">
          <h2>App Router</h2>
          <p>Route-driven UI with server and client components where needed.</p>
          <code>app/</code>
        </article>
        <article className="prisma-card">
          <h2>Database</h2>
          <p>Prisma client helper is set up for development-safe reuse.</p>
          <code>lib/prisma.ts</code>
        </article>
        <article className="prisma-card prisma-card-accent">
          <h2>Health Endpoint</h2>
          <p>Quick API readiness check for tooling and smoke validation.</p>
          <code>/api/health</code>
        </article>
      </section>

      <section className="prisma-runbook" aria-label="Bootstrap path">
        <h2>Bootstrap Path</h2>
        <ol>
          {bootstrapPath.map((step) => (
            <li key={step}>
              <code>{step}</code>
            </li>
          ))}
        </ol>
      </section>

      <footer className="prisma-links" aria-label="Documentation links">
        <a href="/api/health" target="_blank" rel="noreferrer">
          Check Health API
        </a>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          Next.js Docs
        </a>
        <a href="https://www.prisma.io/docs" target="_blank" rel="noreferrer">
          Prisma Docs
        </a>
      </footer>
    </main>
  );
}
