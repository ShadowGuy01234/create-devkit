import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  template: `
    <main class="nova-shell">
      <header class="nova-hero">
        <p class="nova-kicker">ANGULAR + NODE</p>
        <h1>Frontend Command Bridge</h1>
        <p>
          Angular handles interaction-heavy UI while Express powers your backend routes.
          Use one root command to run both services in parallel.
        </p>
      </header>

      <section class="nova-grid" aria-label="Workspace overview">
        <article class="nova-card">
          <h2>Frontend</h2>
          <p>Angular CLI dev server with API proxy support.</p>
          <code>npm run dev:frontend</code>
        </article>
        <article class="nova-card">
          <h2>Backend</h2>
          <p>Express service with layered backend folders.</p>
          <code>npm run dev:server</code>
        </article>
        <article class="nova-card nova-card-accent">
          <h2>Combined Start</h2>
          <p>concurrently launches frontend and backend in one go.</p>
          <code>npm run dev</code>
        </article>
      </section>

      <section class="nova-runbook" aria-label="Runbook">
        <h2>Runbook</h2>
        <ol>
          <li *ngFor="let step of runbook">
            <code>{{ step }}</code>
          </li>
        </ol>
      </section>

      <footer class="nova-links" aria-label="Documentation links">
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
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
      background:
        radial-gradient(circle at 10% 10%, rgba(255, 242, 173, 0.45), rgba(255, 242, 173, 0) 35%),
        radial-gradient(circle at 88% 88%, rgba(123, 214, 255, 0.38), rgba(123, 214, 255, 0) 40%),
        #fff9ef;
      color: #2f1f15;
    }

    .nova-shell {
      width: min(1100px, 100%);
      margin: 0 auto;
      padding: clamp(1.1rem, 2.4vw, 2rem);
      display: grid;
      gap: 1rem;
      box-sizing: border-box;
    }

    .nova-hero {
      border-radius: 1rem;
      border: 1px solid rgba(180, 118, 76, 0.42);
      background: linear-gradient(125deg, rgba(255, 238, 217, 0.94), rgba(255, 224, 190, 0.78));
      padding: clamp(1rem, 2.1vw, 1.8rem);
      box-shadow: 0 10px 32px rgba(116, 69, 34, 0.12);
      animation: appear 600ms ease-out;
    }

    .nova-kicker {
      margin: 0;
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #8f4d1f;
      font-weight: 700;
    }

    .nova-hero h1 {
      margin: 0.5rem 0 0.65rem;
      font-size: clamp(1.9rem, 5vw, 3.1rem);
      line-height: 1;
    }

    .nova-hero p {
      margin: 0;
      max-width: 64ch;
      color: #5d3f2c;
    }

    .nova-grid {
      display: grid;
      gap: 0.9rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .nova-card {
      border-radius: 0.95rem;
      border: 1px solid rgba(184, 133, 88, 0.35);
      background: rgba(255, 245, 232, 0.88);
      padding: 0.95rem;
    }

    .nova-card h2 {
      margin: 0;
      font-size: 1.03rem;
    }

    .nova-card p {
      margin: 0.5rem 0 0.75rem;
      color: #654934;
    }

    .nova-card code,
    .nova-runbook code {
      font-family: 'Cascadia Mono', Consolas, monospace;
      border-radius: 0.5rem;
      border: 1px solid rgba(180, 118, 76, 0.42);
      background: rgba(255, 223, 188, 0.35);
      padding: 0.3rem 0.5rem;
      display: inline-block;
      color: #5b3213;
    }

    .nova-card-accent {
      background: linear-gradient(160deg, rgba(232, 247, 255, 0.93), rgba(202, 236, 255, 0.72));
    }

    .nova-runbook {
      border-radius: 0.95rem;
      border: 1px solid rgba(184, 133, 88, 0.35);
      background: rgba(255, 249, 242, 0.9);
      padding: 0.95rem;
    }

    .nova-runbook h2 {
      margin: 0 0 0.65rem;
      font-size: 1.08rem;
    }

    .nova-runbook ol {
      margin: 0;
      padding-left: 1.15rem;
      display: grid;
      gap: 0.5rem;
    }

    .nova-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
    }

    .nova-links a {
      text-decoration: none;
      color: #57351e;
      border: 1px solid rgba(184, 133, 88, 0.45);
      border-radius: 999px;
      background: rgba(255, 247, 236, 0.92);
      padding: 0.45rem 0.84rem;
      transition: transform 180ms ease, border-color 180ms ease;
    }

    .nova-links a:hover {
      transform: translateY(-2px);
      border-color: #995829;
    }

    @keyframes appear {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 860px) {
      .nova-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class AppComponent {
  readonly runbook = [
    'npm install',
    'npm run setup',
    'cp server/.env.example server/.env',
    'npm run dev',
  ];

  readonly resources = [
    { label: 'Angular Docs', href: 'https://angular.dev' },
    { label: 'Express Docs', href: 'https://expressjs.com/' },
    { label: 'RxJS Docs', href: 'https://rxjs.dev/guide/overview' },
  ];
}
