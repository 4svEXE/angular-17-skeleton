import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-first-banner',
  templateUrl: './first-banner.component.html',
  styleUrls: ['./first-banner.component.scss'],
})
export class FirstBannerComponent {
  imgPath: string = 'assets/img/pages/home/';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 5000,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
    autoHeight: true
  };

  slides: { imgPath: string, label: string }[] = [
    { imgPath: 'slide1.png', label: 'BonTex - ваш шлях до комфорту та стилю' },
    { imgPath: 'slide1.png', label: 'BonTex2 - ваш шлях до комфорту та стилю' },
    { imgPath: 'slide1.png', label: 'BonTex3 - ваш шлях до комфорту та стилю' },
  ];
}
