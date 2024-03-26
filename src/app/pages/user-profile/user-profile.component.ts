import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { User, UserService } from 'src/app/core/services/user.service';
import { map } from 'rxjs';
import { LinkInterface } from 'src/app/core/variables/header';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user!: User | undefined;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private authService: AuthenticationService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.authService.getUserId().subscribe((id) => {
      this.userService
        .findOne(id)
        .pipe(
          map((user: User) => {
            this.user = user;
            // console.log('this.user', this.user);
          })
        )
        .subscribe();
    });
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/'])
  }

  isActive = false;

  isClosedSubBar: boolean = true;

  links: LinkInterface[] = [
    { title: 'Особисті дані', path: 'private-dates' },
    { title: 'Пароль', path: 'password' },
    { title: 'Мої замовлення', path: 'orders' },
    { title: 'Обрані товари', path: 'selected' },
    { title: 'Мої відгуки', path: 'reviews'},
    { title: 'Вихід', path: 'logout' },
  ];

  toggleSubBar() {
    this.isClosedSubBar = !this.isClosedSubBar;
  }
}
