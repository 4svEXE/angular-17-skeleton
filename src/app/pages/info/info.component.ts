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
    { title: 'Каталог', path: 'catalog-info' },
    { title: 'Доставка та оплата', path: 'delivery-and-payments' },
    { title: 'Обмін та повернення', path: 'exchange-and-returns' },
    { title: 'Про нас', path: 'about-us' },
    { title: 'Контакти', path: 'contacts' },
    { title: 'Угода користувача', path: 'user-agreement' },
    { title: 'Питання та відповіді', path: 'faq' },
    { title: 'Відгуки про магазин', path: 'store-reviews' }
  ];

  toggleSubBar() {
    this.isClosedSubBar = !this.isClosedSubBar;
  }
}