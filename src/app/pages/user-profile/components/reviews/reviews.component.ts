import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss', '../../user-profile.component.scss'],
})
export class ReviewsComponent {
  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();

  constructor(private svgService: SvgService) {}
}
