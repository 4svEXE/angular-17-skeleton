import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { User, UserService } from 'src/app/core/services/user.service';
import { map } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  safeSvgCodes: { [key: string]: SafeHtml } =
    this.svgService.getSafeSvgCodes() ?? {};

  links: LinkInterface[] = HeaderLinks;
  user!: { name: string; id: string } | undefined;

  constructor(
    private svgService: SvgService,
    public ngxSmartModalService: NgxSmartModalService,
    public authService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) {}

  // винети в сервіс
  ngOnInit() {
    console.log('init');

    // Спочатку слідкуємо за змінами роутів
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Викликаємо метод оновлення даних тут
      this.refreshData();
    });

    // Викликаємо метод оновлення даних при завантаженні компонента
    this.refreshData();
  }

  refreshData() {
    // console.log('refresh user', this.authService.getUserIdFromStorage());

    this.user = undefined;
    if (!this.authService.getUserIdFromStorage()) return;

    this.authService.getUserId().subscribe((id) => {
      this.userService
        .findOne(id)
        .subscribe((user: User) => {
          this.user = { name: user.email, id: user.id };
          // console.log('this.user', this.user);
        });
    });
  }
}
