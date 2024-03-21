import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { SvgService } from 'src/app/core/services/svg.service';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'angular-skeleton';
  safeSvgCodes: { [key: string]: SafeHtml } =
    this.svgService.getSafeSvgCodes() ?? {};

  links: LinkInterface[] = HeaderLinks;
  username = null;

  formGroup = new FormGroup({
    search: new FormControl(''),
  });

  constructor(
    private svgService: SvgService,
    public ngxSmartModalService: NgxSmartModalService
  ) {}
}
