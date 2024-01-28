import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookLocation} from '../booklocation';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <h2 class="listing-heading">{{ bookLocation.name }}</h2>
      <p class="listing-location">{{ bookLocation.description }}</p>
      <button class="listing-location buy-button" (click)="buyProduct(bookLocation)">Купить за {{ bookLocation.price }} р.</button>
    </section>
  `,
  styleUrls: ['./book-location.component.css'],
})
export class BookLocationComponent {
  @Input() bookLocation!: BookLocation;
   total: number = 0;

   buyProduct(product: any) {
      this.total += product.price;
      console.log(`Покупка: ${product.name} - ${product.price}р.\nВыручка с продажи этой книги = ${this.total}`);
 }
}
