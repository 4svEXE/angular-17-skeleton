// svg.service.ts
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { svgImages } from 'src/app/shared/svg';

@Injectable({
  providedIn: 'root',
})
export class SvgService {
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvgCodes(): { [key: string]: SafeHtml } {
    const safeSvgCodes: { [key: string]: SafeHtml } = {};

    Object.keys(svgImages).forEach((key) => {
      safeSvgCodes[key] = this.sanitizer.bypassSecurityTrustHtml(
        svgImages[key]
      );
    });

    return safeSvgCodes;
  }
}
