import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';

@Component({
  selector: 'app-mobile-tab-bar',
  templateUrl: './mobile-tab-bar.component.html',
  styleUrls: ['./mobile-tab-bar.component.scss'],
})
export class MobileTabBarComponent {
  links: LinkInterface[] = HeaderLinks;
  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();
  isClosedSubBar: boolean = true;

  constructor(private svgService: SvgService) {}

  toggleSubBar() {
    this.isClosedSubBar = !this.isClosedSubBar;
  }
}
