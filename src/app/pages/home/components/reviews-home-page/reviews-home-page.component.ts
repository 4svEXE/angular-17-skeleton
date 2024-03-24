import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Review } from 'src/app/core/interfaces';
import { Reviews } from 'src/app/core/variables';

@Component({
  selector: 'app-reviews-home-page',
  templateUrl: './reviews-home-page.component.html',
  styleUrls: ['./reviews-home-page.component.scss'],
})
export class ReviewsHomePageComponent {
  arrowPath = 'assets/img/pages/home/arrow_carousel.svg';
  reviews: Review[] = Reviews;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: true,
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
  };
}
