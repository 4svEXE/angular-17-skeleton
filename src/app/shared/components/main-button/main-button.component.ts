import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
})
export class MainButtonComponent {
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() label: string = 'Click me';
  @Input() additionalClasses: string = '';
  @Input() isDisabled: boolean = false;
  @Input() imageUrl: string | undefined;

  get buttonClasses(): string{
    return 'button ' + this.additionalClasses;
  }

  onClick(): void {
    this.buttonClick.emit();
  }
}
