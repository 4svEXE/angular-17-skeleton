import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { Review } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  @Input() review!: Review;

  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();
  isOpenReview: boolean = false;

  constructor(private svgService: SvgService) {}

  toggleIsOpenReview() {
    this.isOpenReview = !this.isOpenReview;
  }

  getRatingArray(rating: number): number[] {
    return Array.from({ length: rating }, (_, index) => index + 1);
  }
}
