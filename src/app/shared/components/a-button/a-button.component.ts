import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-a-button',
  templateUrl: './a-button.component.html',
  styleUrls: ['./a-button.component.scss']
})
export class AButtonComponent {
  @Input() label: string = 'Click me';
  @Input() additionalClasses: string = '';
  @Input() routerLink: string | undefined = '';
  @Input() safeSvg: string | undefined;

  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();

  constructor(private svgService: SvgService) {}

  get buttonClasses(): string{
    const classes = 'a-button mb-3 md:justify-center justify-start md:w-fit w-full '
    return classes + this.additionalClasses;
  }
}
