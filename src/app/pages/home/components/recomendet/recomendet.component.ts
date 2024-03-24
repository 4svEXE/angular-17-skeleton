import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-recomendet',
  templateUrl: './recomendet.component.html',
  styleUrls: ['./recomendet.component.scss'],
})
export class RecomendetComponent {
  arrowPath = 'assets/img/pages/home/arrow_carousel.svg';

  products: Product[] = [
    {
      groupTitle: 'Хіт',
      discount: '-25%',
      image: 'assets/img/pages/home/products/01.png',
      shortName: 'Килим в дитячу «Класики з балериною та зайчиком»',
      oldPrice: '13 000 ₴',
      currentPrice: '9750 ₴',
      routerLink: '/',
      id: '01',
    },
    {
      groupTitle: 'Хіт',
      discount: '-20%',
      image: 'assets/img/pages/home/products/01.png',
      shortName: 'Килим в дитячу «Класики»',
      oldPrice: '10 000 ₴',
      currentPrice: '8000 ₴',
      routerLink: '/',
      id: '02',
    },
    {
      groupTitle: 'Новинка',
      discount: '-15%',
      image: 'assets/img/pages/home/products/01.png',
      shortName: 'Килим «Мультяшні пригоди»',
      oldPrice: '9000 ₴',
      currentPrice: '7650 ₴',
      routerLink: '/',
      id: '03',
    },
    {
      groupTitle: 'Хіт',
      discount: '-30%',
      image: 'assets/img/pages/home/products/01.png',
      shortName: 'Килим для підлоги «Фантастичні космічні пригоди»',
      oldPrice: '15 000 ₴',
      currentPrice: '10 500 ₴',
      routerLink: '/',
      id: '04',
    },
    {
      groupTitle: 'Новинка',
      discount: '-10%',
      image: 'assets/img/pages/home/products/01.png',
      shortName: 'Килим для вітальні «Модерн»',
      oldPrice: '12 000 ₴',
      currentPrice: '10 800 ₴',
      routerLink: '/',
      id: '05',
    },
  ];

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

export interface Product {
  groupTitle: string;
  discount?: string;
  image: string;
  shortName: string;
  oldPrice?: string;
  currentPrice: string;
  routerLink: string;
  id: string;
}
