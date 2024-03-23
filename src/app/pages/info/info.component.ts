import { Component } from '@angular/core';
import { LinkInterface } from 'src/app/core/variables/header';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  isActive = false;

  isClosedSubBar: boolean = true;

  links: LinkInterface[] = [
    { title: 'Каталог', path: '/info/catalog-info' },
    { title: 'Доставка та оплата', path: '/info/delivery-and-payments' },
    { title: 'Обмін та повернення', path: '/info/exchange-and-returns' },
    { title: 'Про нас', path: '/info/about-us' },
    { title: 'Контакти', path: '/info/contacts' },
    { title: 'Угода користувача', path: '/info/user-agreement' },
    { title: 'Питання та відповіді', path: '/info/faq' },
    { title: 'Відгуки про магазин', path: '/info/store-reviews' }
  ];

  toggleSubBar() {
    this.isClosedSubBar = !this.isClosedSubBar;
  }
}
