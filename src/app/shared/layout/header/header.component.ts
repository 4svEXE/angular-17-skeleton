import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'angular-skeleton';
  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes() ?? {};

  constructor(
    // private router: Router,
    private svgService: SvgService
  ) {}

  ngOnInit(): void {
    // this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

}
