import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { User, UserService } from 'src/app/core/services/user.service';

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
  userFirstLetter: string = '';

  constructor(
    private svgService: SvgService,
    public ngxSmartModalService: NgxSmartModalService,
    public authService: AuthenticationService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.user = undefined;
    if (!this.authService.getUserIdFromStorage()) return;

    this.authService.getUserId().subscribe((id) => {
      this.userService.findOne(id).subscribe((user: User) => {
        this.user = { name: user.email, id: user.id };
        this.userFirstLetter = this.user?.name?.[0]?.toUpperCase() ?? '';
      });
    });
  }
}
