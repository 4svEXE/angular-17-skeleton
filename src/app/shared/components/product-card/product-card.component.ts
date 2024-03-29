import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';
import { Product } from 'src/app/core/variables';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
  @Input() product!: Product;

  safeSvgCodes: { [key: string]: SafeHtml } = {};

  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  isFav: boolean = false;

  toggleFavorite() {
    this.isFav = !this.isFav;
  }
}

// export interface Product {
//   groupTitle: string;
//   discount?: string;
//   image: string;
//   shortName: string;
//   oldPrice?: string;
//   currentPrice: string;
//   routerLink: string;
// }
