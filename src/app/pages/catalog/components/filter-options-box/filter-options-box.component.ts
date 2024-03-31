import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-filter-options-box',
  templateUrl: './filter-options-box.component.html',
  styleUrls: ['./filter-options-box.component.scss'],
})
export class FilterOptionsBoxComponent {
  @Input() label!: string;
  @Input() options: { label: string; count: number; isChecked: boolean }[] = [];

  // TODO винести опцію в інтерфейс
  isShowOptions: boolean = false;

  safeSvgCodes: { [key: string]: SafeHtml } =
    this.svgService.getSafeSvgCodes() ?? {};

  constructor(private svgService: SvgService) {}

  toggleShowOptions() {
    this.isShowOptions =!this.isShowOptions;
  }
}
