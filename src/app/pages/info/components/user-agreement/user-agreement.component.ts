import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.scss', '../../info.component.scss'],
})
export class UserAgreementComponent {
  constructor(private elementRef: ElementRef) {}

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -100; // Зміщення на 100 пікселів вище від елемента
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
