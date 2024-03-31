import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.scss'],
})
export class FilterOptionComponent {
  @Input() label!: string;
  @Input() isChecked: boolean = false;
  @Input() count: number = 0;
  @Input() id: string = '';
}
