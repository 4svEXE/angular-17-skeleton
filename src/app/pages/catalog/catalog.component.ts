import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product, Products } from 'src/app/core/variables';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  products: Product[] = Products;
  productsToDisplay!: Product[];

  category!: string;
  private sub!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.category = params['category'];

      this.productsToDisplay = this.getProductsByCategoty( this.category)
    });
  }

  getProductsByCategoty(category: string): Product[] {
    if (category === 'promotions') {
      return this.products.filter((product) => {
        return product.isDiscount;
      });
    }

    return this.products.filter((product) => {
      return product.category === this.category;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
