export default function Home() {
  const workflow = [
    {
      title: "Develop",
      summary:
        "Build App Router pages and server components with focused iteration loops.",
      command: "npm run dev",
      accent: "border-t-[#0a72ef]",
    },
    {
      title: "Model",
      summary:
        "Evolve Prisma schema and regenerate strongly typed client contracts.",
      command: "npx prisma generate",
      accent: "border-t-[#de1d8d]",
    },
    {
      title: "Validate",
      summary:
        "Check runtime readiness through a lightweight API health endpoint.",
      command: "/api/health",
      accent: "border-t-[#ff5b4f]",
    },
  ];

  const foundations = [
    {
      title: "Application Surface",
      detail:
        "Route-driven UI scaffold with app directory conventions and shared layout.",
      anchor: "app/",
    },
    {
      title: "Data Layer",
      detail:
        "Prisma schema and reusable singleton client setup for development safety.",
      anchor: "prisma/schema.prisma",
    },
  ];

  const setupSteps = [
    "npm install",
    "cp .env.example .env",
    "npx prisma generate",
    "npm run dev",
  ];

  const resources = [
    { label: "Health API", href: "/api/health" },
    { label: "Next.js Docs", href: "https://nextjs.org/docs" },
    { label: "Prisma Docs", href: "https://www.prisma.io/docs" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#ededed]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-36 left-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -top-28 right-0 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 md:px-8 md:py-10">
        <header className="rounded-xl border border-white/10 bg-[#0b0b0d] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-8">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[#a1a1aa]">
            NEXT.JS + PRISMA + TAILWIND
          </p>
          <h1 className="mt-2 text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">
            Data Model Delivery Baseline
          </h1>
          <p className="mt-3 max-w-[66ch] leading-[1.65] text-[#a1a1aa]">
            A utility-first starter for teams shipping route-driven products
            with Prisma-managed data contracts and predictable deployment flows.
          </p>
        </header>

        <section
          className="grid gap-3 md:grid-cols-3"
          aria-label="Workflow pipeline"
        >
          {workflow.map((item) => (
            <article
              key={item.title}
              className={`rounded-[10px] border border-white/10 border-t-[3px] bg-[#0b0b0d] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${item.accent}`}
            >
              <h2 className="text-[1.12rem] tracking-[-0.02em] text-[#f5f5f5]">
                {item.title}
              </h2>
              <p className="mt-2 mb-3 text-[#a1a1aa]">{item.summary}</p>
              <code className="inline-block rounded-full border border-[#7dd3fc]/30 bg-[#7dd3fc]/10 px-2.5 py-1 font-mono text-xs text-[#7dd3fc]">
                {item.command}
              </code>
            </article>
          ))}
        </section>

        <section
          className="grid gap-3 md:grid-cols-2"
          aria-label="Project foundations"
        >
          {foundations.map((item) => (
            <article
              key={item.title}
              className="rounded-[10px] border border-white/10 bg-[#0b0b0d] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <h2 className="text-[1.05rem] tracking-[-0.02em] text-[#f5f5f5]">
                {item.title}
              </h2>
              <p className="mt-2 mb-3 text-[#a1a1aa]">{item.detail}</p>
              <code className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-[#d4d4d8]">
                {item.anchor}
              </code>
            </article>
          ))}
        </section>

        <section
          className="rounded-[10px] border border-white/10 bg-[#0b0b0d] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          aria-label="Bootstrap commands"
        >
          <h2 className="text-[1.06rem] tracking-[-0.02em] text-[#f5f5f5]">
            Bootstrap Commands
          </h2>
          <ol className="mt-3 grid list-decimal gap-2 pl-5">
            {setupSteps.map((step) => (
              <li key={step}>
                <code className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-[#d4d4d8]">
                  {step}
                </code>
              </li>
            ))}
          </ol>
        </section>

        <footer
          className="flex flex-wrap gap-2.5"
          aria-label="Documentation links"
        >
          {resources.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/10 bg-[#0d0d10] px-3 py-1.5 text-sm font-medium text-[#e4e4e7] transition-colors hover:border-white/20 hover:bg-[#141418]"
            >
              {item.label}
            </a>
          ))}
        </footer>
      </div>
    </main>
  );
}
