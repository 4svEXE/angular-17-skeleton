import { AuthenticationService } from './core/services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-skeleton';

  constructor(private authService: AuthenticationService) {}

  testUser = {
    name: 'Jimm Helpert',
    email: 'solGoodman@gamail.com',
    password: 'wtf12345',
  };

  onSubmit() {
    this.authService
      .registerAndLogin(this.testUser)
      .subscribe((userId) => {
        console.log('userId', userId);

        // this.router.navigate(['user/' + userId]);
      });
  }
}
