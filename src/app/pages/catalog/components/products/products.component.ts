import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/variables';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() products: Product[] = [];

  users: any;
  p: number = 1;
  total: number = 0;

  pageChangeEvent(event: number) {
    this.p = event;
    this.products;
  }
}
