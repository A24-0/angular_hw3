import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookLocationComponent} from '../book-location/book-location.component';
import {BookLocation} from '../booklocation';
import {BookService} from '../book.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookLocationComponent],
  template: `
    <section class="results">
      <app-product-item
        *ngFor="let bookLocation of bookLocationList"
        [bookLocation]="bookLocation"
      ></app-product-item>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class BookComponent {
  bookLocationList: BookLocation[] = [];
  bookService: BookService = inject(BookService);

  constructor() {
    this.bookLocationList = this.bookService.getAllBookLocations();
  }
}
