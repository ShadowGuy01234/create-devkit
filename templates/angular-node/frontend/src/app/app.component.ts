import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="app">
      <h1>Angular + Node.js</h1>
      <p>Edit <code>src/app/app.component.ts</code> to get started.</p>
    </div>
  `,
  styles: [`
    .app {
      font-family: system-ui, sans-serif;
      text-align: center;
      padding: 4rem;
    }
    h1 { color: #dd0031; }
    p { color: #666; margin-top: 1rem; }
  `],
})
export class AppComponent {
  title = '{{PROJECT_NAME}}';
}
