import { AuthenticationService } from './core/services/authentication.service';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-skeleton';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  testUser = {
    name: 'Jimm Helpert',
    email: 'solGoodman@gamail.com',
    password: 'wtf12345',
  };

  onSubmit() {
    this.authService.registerAndLogin(this.testUser).subscribe((userId) => {
      console.log('userId', userId);

      // this.router.navigate(['user/' + userId]);
    });
  }

  onLogin() {
    this.authService;
    this.authService
      .login(this.testUser)
      .pipe(switchMap(() => this.authService.getUserId()))
      .subscribe((userId) => {
        console.log('userId', userId);
        this.router.navigate(['user/' + userId]);
      });
  }

  onLogout(){
    this.authService.logOut();
    this.router.navigate(['']);
  }
}
