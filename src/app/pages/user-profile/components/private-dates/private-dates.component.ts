import { Component } from '@angular/core';

import { SafeHtml } from '@angular/platform-browser';
import {
  User,
  AuthenticationService,
} from 'src/app/core/services/authentication.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-private-dates',
  templateUrl: './private-dates.component.html',
  styleUrls: ['./private-dates.component.scss', '../../user-profile.component.scss'],
})
export class PrivateDatesComponent {
  user: User | undefined;
  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();

  constructor(
    private svgService: SvgService,
    private userService: UserService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    const id = this.authService.getUserIdFromStorage();
    if (id != null) {
      this.userService.findOne(id).subscribe((user) => {
        this.user = user;
      });
    }
  }
}
