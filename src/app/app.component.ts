import { Component } from '@angular/core';

import { AuthenticationService } from './core/services/authentication.service';

import { Router } from '@angular/router';

import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from './core/services/svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-skeleton';
  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private svgService: SvgService
  ) {}

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
