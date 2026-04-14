import { NgClass, NgFor } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgClass, NgFor],
  template: `
    <main
      class="min-h-screen bg-[radial-gradient(circle_at_15%_-10%,rgba(56,189,248,0.2),transparent_46%),radial-gradient(circle_at_85%_0%,rgba(34,197,94,0.14),transparent_42%),#050505] text-[#ededed]"
    >
      <div
        class="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 md:px-8 md:py-10"
      >
        <header
          class="rounded-xl border border-white/10 bg-[#0b0b0d] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-8"
        >
          <p
            class="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[#a1a1aa]"
          >
            ANGULAR + NODE + TAILWIND
          </p>
          <h1
            class="mt-2 text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white"
          >
            Structured SPA Delivery Baseline
          </h1>
          <p class="mt-3 max-w-[66ch] leading-[1.65] text-[#a1a1aa]">
            A utility-first starting point for teams shipping Angular frontends
            with Express APIs through a single orchestrated workflow.
          </p>
        </header>

        <section
          class="grid gap-3 md:grid-cols-3"
          aria-label="Workflow pipeline"
        >
          <article
            *ngFor="let item of workflow"
            class="rounded-[10px] border border-white/10 border-t-[3px] bg-[#0b0b0d] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            [ngClass]="item.accent"
          >
            <h2 class="text-[1.12rem] tracking-[-0.02em] text-[#f5f5f5]">
              {{ item.title }}
            </h2>
            <p class="mt-2 mb-3 text-[#a1a1aa]">{{ item.summary }}</p>
            <code
              class="inline-block rounded-full border border-[#7dd3fc]/30 bg-[#7dd3fc]/10 px-2.5 py-1 font-mono text-xs text-[#7dd3fc]"
            >
              {{ item.command }}
            </code>
          </article>
        </section>

        <section
          class="grid gap-3 md:grid-cols-2"
          aria-label="Project foundations"
        >
          <article
            *ngFor="let item of foundations"
            class="rounded-[10px] border border-white/10 bg-[#0b0b0d] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          >
            <h2 class="text-[1.05rem] tracking-[-0.02em] text-[#f5f5f5]">
              {{ item.title }}
            </h2>
            <p class="mt-2 mb-3 text-[#a1a1aa]">{{ item.detail }}</p>
            <code
              class="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-[#d4d4d8]"
            >
              {{ item.anchor }}
            </code>
          </article>
        </section>

        <section
          class="rounded-[10px] border border-white/10 bg-[#0b0b0d] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          aria-label="Bootstrap commands"
        >
          <h2 class="text-[1.06rem] tracking-[-0.02em] text-[#f5f5f5]">
            Bootstrap Commands
          </h2>
          <ol class="mt-3 grid list-decimal gap-2 pl-5">
            <li *ngFor="let step of runbook">
              <code
                class="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-[#d4d4d8]"
              >
                {{ step }}
              </code>
            </li>
          </ol>
        </section>

        <footer class="flex flex-wrap gap-2.5" aria-label="Documentation links">
          <a
            *ngFor="let resource of resources"
            [href]="resource.href"
            target="_blank"
            rel="noreferrer"
            class="rounded-md border border-white/10 bg-[#0d0d10] px-3 py-1.5 text-sm font-medium text-[#e4e4e7] transition-colors hover:border-white/20 hover:bg-[#141418]"
          >
            {{ resource.label }}
          </a>
        </footer>
      </div>
    </main>
  `,
  styles: [":host{display:block;min-height:100vh}"],
})
export class AppComponent {
  readonly workflow = [
    {
      title: "Develop",
      summary: "Implement Angular UI with fast feedback and API proxy support.",
      command: "npm run dev:frontend",
      accent: "border-t-[#0a72ef]",
    },
    {
      title: "Preview",
      summary:
        "Validate Express routes and contracts in isolated backend runtime.",
      command: "npm run dev:server",
      accent: "border-t-[#de1d8d]",
    },
    {
      title: "Ship",
      summary:
        "Launch both services from one root command through concurrently.",
      command: "npm run dev",
      accent: "border-t-[#ff5b4f]",
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
