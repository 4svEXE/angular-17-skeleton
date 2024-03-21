import { Component, HostListener } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-header-small-screens',
  templateUrl: './header-small-screens.component.html',
  styleUrls: ['./header-small-screens.component.scss'],
})
export class HeaderSmallScreensComponent {
  links: LinkInterface[] = HeaderLinks;
  isActiveContacts: boolean = false;
  isFixed: boolean = false;
  imgPath: string = 'assets/img/shared/layout/';
  safeSvgCodes: { [key: string]: SafeHtml } =
    this.svgService.getSafeSvgCodes() ?? {};

  constructor(private svgService: SvgService) {}

  isActiveContactsToggle() {
    this.isActiveContacts = !this.isActiveContacts;
  }

  // For sticky scrolling in the header
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    // Calculate the scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isFixed = scrollPosition > 50;
  }
}
