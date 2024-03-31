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

  selectedFilters = [
    { label: 'Від дешевих до дорогих' },
    { label: 'Від дорогих до дешевих' },
    { label: 'За рейтингом' },
    { label: 'Новинки' },
  ];

  sizesOptions = [
    { label: '80x300', count: 9, isChecked: true },
    { label: '180x300', count: 3, isChecked: false },
    { label: '380x300', count: 1, isChecked: false },
  ]

  formGroup = new FormGroup({
    filterSelect: new FormControl(this.options[0].value),
  });

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
