import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss', '../../info.component.scss'],
})
export class AboutUsComponent {
  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();

  constructor(private svgService: SvgService) {}
}
