import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';

import { Product, Products } from 'src/app/core/variables';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  safeSvgCodes: { [key: string]: SafeHtml } =
    this.svgService.getSafeSvgCodes() ?? {};

  products: Product[] = Products;
  productsToDisplay!: Product[];

  category!: string;
  private sub!: Subscription;

  options = [
    { label: 'Від дешевих до дорогих', value: 'catalog', selected: true },
    { label: 'Від дорогих до дешевих', value: 'rugs' },
    { label: 'За рейтингом', value: 'rugs' },
    { label: 'Новинки', value: 'rugs' },
    { label: 'Хіти', value: 'promotions' },
  ];

  formGroup = new FormGroup({
    filterSelect: new FormControl(this.options[0].value),
  });

  // ! filter by price
  price = {
    min: 0,
    max: 20000,
    minInp: 0,
    maxInp: 20000,
  };
  // ! filter by price

  constructor(
    private activatedRoute: ActivatedRoute,
    private svgService: SvgService
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.category = params['category'];

      this.productsToDisplay = this.getProductsByCategoty(this.category);
    });
  }

  // ! filter by price

  filterByPriceGroup = new FormGroup({
    minInp: new FormControl(),
    maxInp: new FormControl(),
    min: new FormControl(this.price.min),
    max: new FormControl(this.price.max),
  });

  getMinPrice(): number {
    return this.filterByPriceGroup.get('min')?.value || this.price.min;
  }

  getMaxPrice() {
    return this.filterByPriceGroup.get('max')?.value || this.price.max;
  }

  updatePrices() {
    if (this.getMinPrice() >= this.getMaxPrice()) {
      this.filterByPriceGroup.get('min')?.setValue(this.getMaxPrice());
      this.filterByPriceGroup.get('minInp')?.setValue(this.getMaxPrice());

      this.filterByPriceGroup.get('max')?.setValue(this.getMinPrice());
      this.filterByPriceGroup.get('maxInp')?.setValue(this.getMinPrice());
    }
  }

  inputPrices() {
    const min = this.filterByPriceGroup.get('minInp')?.value || this.price.min;
    const max = this.filterByPriceGroup.get('maxInp')?.value || this.price.max;

    this.price.minInp = parseInt(min + '', 10);
    this.price.maxInp = parseInt(max + '', 10);

    if(this.price.minInp > this.price.maxInp){
      [this.price.minInp, this.price.maxInp] = [this.price.maxInp, this.price.minInp]
    }
  }

  onPriceFiltersSubmit() {
    this.filterByPriceGroup.get('min')?.setValue(this.price.minInp);
    this.filterByPriceGroup.get('max')?.setValue(this.price.maxInp);
  }

  // ! filter by price

  getProductsByCategoty(category: string): Product[] {
    if (!category) {
      return this.products;
    }

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
