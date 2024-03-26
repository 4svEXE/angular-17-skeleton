import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-selected-goods',
  templateUrl: './selected-goods.component.html',
  styleUrls: ['./selected-goods.component.scss', '../../user-profile.component.scss']
})
export class SelectedGoodsComponent {
  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();

  constructor(private svgService: SvgService) {}
}
