import { Component, Input } from '@angular/core';
import { LinkInterface } from 'src/app/core/variables/header';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', './test.scss']
})
export class NavBarComponent {
  @Input() links!: LinkInterface[];
  @Input() isClosed: boolean = true;
  @Input() toggleSubBarLabel: string = '';

  toggleSubBar() {
    this.isClosed = !this.isClosed;
  }
}
