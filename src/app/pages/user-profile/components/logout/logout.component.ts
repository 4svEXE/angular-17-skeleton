import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss', '../../user-profile.component.scss'],
})

export class LogoutComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
