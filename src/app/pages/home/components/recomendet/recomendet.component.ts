import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product, Products } from 'src/app/core/variables';

@Component({
  selector: 'app-recomendet',
  templateUrl: './recomendet.component.html',
  styleUrls: [
    './recomendet.component.scss',
    '../../../components/a-secondary/a-secondary.scss',
  ],
})
export class RecomendetComponent {
  arrowPath = 'assets/img/pages/home/arrow_carousel.svg';

  products: Product[] = Products;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      `<img src="${this.arrowPath}" alt="arrow-left" class="arrow-left"/>`,
      `<img src="${this.arrowPath}" alt="arrow-right" />`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
