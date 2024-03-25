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
            console.log('this.user', this.user);
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
    { title: 'Каталог', path: '/info/catalog-info' },
    { title: 'Доставка та оплата', path: '/info/delivery-and-payments' },
    { title: 'Обмін та повернення', path: '/info/exchange-and-returns' },
    { title: 'Про нас', path: '/info/about-us' },
    { title: 'Контакти', path: '/info/contacts' },
    { title: 'Угода користувача', path: '/info/user-agreement' },
    { title: 'Питання та відповіді', path: '/info/faq' },
    { title: 'Відгуки про магазин', path: '/info/store-reviews' }
  ];

  toggleSubBar() {
    this.isClosedSubBar = !this.isClosedSubBar;
  }
}
