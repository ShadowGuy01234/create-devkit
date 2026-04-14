import { NgFor } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgFor],
  template: `
    <main class="studio-shell">
      <header class="studio-hero">
        <p class="studio-kicker">ANGULAR + NODE</p>
        <h1>Structured SPA Delivery Baseline</h1>
        <p>
          A Vercel-inspired starting point for teams shipping Angular frontends
          with Express APIs through a single orchestrated workflow.
        </p>
      </header>

      <section class="workflow-grid" aria-label="Workflow pipeline">
        <article
          *ngFor="let item of workflow"
          class="workflow-step"
          [attr.data-tone]="item.tone"
        >
          <h2>{{ item.title }}</h2>
          <p>{{ item.summary }}</p>
          <code>{{ item.command }}</code>
        </article>
      </section>

      <section class="foundation-grid" aria-label="Project foundations">
        <article *ngFor="let item of foundations" class="foundation-card">
          <h2>{{ item.title }}</h2>
          <p>{{ item.detail }}</p>
          <code>{{ item.anchor }}</code>
        </article>
      </section>

      <section class="command-board" aria-label="Bootstrap commands">
        <h2>Bootstrap Commands</h2>
        <ol>
          <li *ngFor="let step of runbook">
            <code>{{ step }}</code>
          </li>
        </ol>
      </section>

      <footer class="resource-row" aria-label="Documentation links">
        <a
          *ngFor="let resource of resources"
          [href]="resource.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ resource.label }}
        </a>
      </footer>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        font-family:
          "Geist", "Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
        background:
          radial-gradient(
            circle at 15% -10%,
            rgba(56, 189, 248, 0.2),
            transparent 46%
          ),
          radial-gradient(
            circle at 85% 0%,
            rgba(34, 197, 94, 0.14),
            transparent 42%
          ),
          #050505;
        color: #ededed;
      }

      .studio-shell {
        width: min(1120px, 100%);
        margin: 0 auto;
        padding: clamp(1.25rem, 3vw, 2.75rem) clamp(1rem, 2.5vw, 2rem) 2.5rem;
        display: grid;
        gap: 1rem;
        box-sizing: border-box;
      }

      .studio-hero {
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: linear-gradient(
          180deg,
          rgba(11, 11, 13, 0.96),
          rgba(8, 8, 10, 0.95)
        );
        padding: clamp(1.15rem, 2.4vw, 2rem);
        box-shadow:
          rgba(0, 0, 0, 0.5) 0 30px 80px,
          rgba(255, 255, 255, 0.03) 0 1px 0 inset;
      }

      .studio-kicker {
        margin: 0;
        font-family: "Geist Mono", "SFMono-Regular", Menlo, Consolas, monospace;
        font-size: 0.72rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: #a1a1aa;
      }

      .studio-hero h1 {
        margin: 0.55rem 0 0.75rem;
        font-size: clamp(2rem, 5vw, 3.35rem);
        line-height: 1.02;
        letter-spacing: -0.06em;
        font-weight: 600;
        color: #fafafa;
      }

      .studio-hero p {
        margin: 0;
        max-width: 66ch;
        color: #a1a1aa;
        line-height: 1.65;
      }

      .workflow-grid {
        display: grid;
        gap: 0.9rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .workflow-step {
        border-top: 3px solid #27272a;
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        border-left: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 10px;
        background: #0b0b0d;
        padding: 1rem;
        box-shadow: rgba(255, 255, 255, 0.03) 0 1px 0 inset;
      }

      .workflow-step[data-tone="develop"] {
        border-top-color: #38bdf8;
      }

      .workflow-step[data-tone="preview"] {
        border-top-color: #a855f7;
      }

      .workflow-step[data-tone="ship"] {
        border-top-color: #22c55e;
      }

      .workflow-step h2 {
        margin: 0;
        font-size: 1.12rem;
        letter-spacing: -0.02em;
        color: #f5f5f5;
      }

      .workflow-step p {
        margin: 0.5rem 0 0.8rem;
        color: #a1a1aa;
      }

      .workflow-step code {
        font-family: "Geist Mono", "SFMono-Regular", Menlo, Consolas, monospace;
        font-size: 0.78rem;
        border-radius: 9999px;
        padding: 0.34rem 0.62rem;
        border: 1px solid rgba(125, 211, 252, 0.3);
        background: rgba(125, 211, 252, 0.12);
        color: #7dd3fc;
      }

      .foundation-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.9rem;
      }

      .foundation-card {
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: #0b0b0d;
        padding: 1rem;
        box-shadow: rgba(255, 255, 255, 0.03) 0 1px 0 inset;
      }

      .foundation-card h2 {
        margin: 0;
        font-size: 1.05rem;
        letter-spacing: -0.02em;
        color: #f5f5f5;
      }

      .foundation-card p {
        margin: 0.5rem 0 0.78rem;
        color: #a1a1aa;
      }

      .foundation-card code,
      .command-board code {
        font-family: "Geist Mono", "SFMono-Regular", Menlo, Consolas, monospace;
        font-size: 0.8rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.04);
        color: #d4d4d8;
        border-radius: 6px;
        padding: 0.28rem 0.46rem;
      }

      .command-board {
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: #0b0b0d;
        padding: 1rem;
        box-shadow: rgba(255, 255, 255, 0.03) 0 1px 0 inset;
      }

      .command-board h2 {
        margin: 0 0 0.7rem;
        font-size: 1.06rem;
        letter-spacing: -0.02em;
        color: #f5f5f5;
      }

      .command-board ol {
        margin: 0;
        padding-left: 1.1rem;
        display: grid;
        gap: 0.5rem;
      }

      .resource-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.65rem;
      }

      .resource-row a {
        text-decoration: none;
        font-size: 0.86rem;
        font-weight: 500;
        color: #e4e4e7;
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: #0d0d10;
        padding: 0.42rem 0.74rem;
        transition:
          border-color 180ms ease,
          background-color 180ms ease;
      }

      .resource-row a:hover {
        border-color: rgba(255, 255, 255, 0.2);
        background: #141418;
      }

      @media (max-width: 920px) {
        .workflow-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 680px) {
        .foundation-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AppComponent {
  readonly workflow = [
    {
      tone: "develop",
      title: "Develop",
      summary: "Implement Angular UI with fast feedback and API proxy support.",
      command: "npm run dev:frontend",
    },
    {
      tone: "preview",
      title: "Preview",
      summary:
        "Validate Express routes and contracts in isolated backend runtime.",
      command: "npm run dev:server",
    },
    {
      tone: "ship",
      title: "Ship",
      summary:
        "Launch both services from one root command through concurrently.",
      command: "npm run dev",
    },
  ];

  readonly foundations = [
    {
      title: "Frontend Surface",
      detail: "Angular app scaffolding ready for modular UI and route growth.",
      anchor: "frontend/src/app/",
    },
    {
      title: "Backend Core",
      detail:
        "Express service structure with controllers, routes, and utility modules.",
      anchor: "server/src/",
    },
  ];

  readonly runbook = [
    "npm install",
    "npm run setup",
    "cp server/.env.example server/.env",
    "npm run dev",
  ];

  readonly resources = [
    { label: "Angular Docs", href: "https://angular.dev" },
    { label: "Express Docs", href: "https://expressjs.com/" },
    { label: "RxJS Docs", href: "https://rxjs.dev/guide/overview" },
  ];
}
