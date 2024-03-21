import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/core/services/svg.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  safeSvgCodes: { [key: string]: SafeHtml } =
  this.svgService.getSafeSvgCodes() ?? {};

  formGroup = new FormGroup({
    search: new FormControl(''),
  });

  constructor(
    private svgService: SvgService,
  ) {}
}
