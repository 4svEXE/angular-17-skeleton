import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  safeSvgCodes: { [key: string]: SafeHtml } =
    this.svgService.getSafeSvgCodes() ?? {};

  links: LinkInterface[] = HeaderLinks;
  username = null;

  constructor(
    private svgService: SvgService,
    public ngxSmartModalService: NgxSmartModalService
  ) {}
}
