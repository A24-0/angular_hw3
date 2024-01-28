import {Component} from '@angular/core';
import {BookComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookComponent],
  template: `
    <main>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
