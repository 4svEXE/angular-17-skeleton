import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['../../catalog.component.scss'],
})
export class FilterByPriceComponent {
  price = {
    min: 0,
    max: 20000,
    minInp: 0,
    maxInp: 20000,
  };

  // TODO додати патерн з вводом ьільки чисел

  filterByPriceGroup = new FormGroup({
    minInp: new FormControl('', [Validators.pattern(/^\d*$/)]),
    maxInp: new FormControl('', [Validators.pattern(/^\d*$/)]),
    min: new FormControl(this.price.min),
    max: new FormControl(this.price.max),
  });

  getMinPrice(): number {
    return this.filterByPriceGroup.get('min')?.value || this.price.min;
  }

  getMaxPrice(): number {
    return this.filterByPriceGroup.get('max')?.value || this.price.max;
  }

  updatePrices() {
    this.inputPrices('min', 'max');

    if (this.getMinPrice() >= this.getMaxPrice()) {
      this.filterByPriceGroup.get('min')?.setValue(this.getMaxPrice());
      this.filterByPriceGroup.get('minInp')?.setValue(this.getMaxPrice() + '');

      this.filterByPriceGroup.get('max')?.setValue(this.getMinPrice());
      this.filterByPriceGroup.get('maxInp')?.setValue(this.getMinPrice() + '');
    }
  }

  inputPrices(minEl: string = 'minInp', maxEl: string = 'maxInp') {
    const min = this.filterByPriceGroup.get(minEl)?.value || this.price.min;
    const max = this.filterByPriceGroup.get(maxEl)?.value || this.price.max;

    this.price.minInp = parseInt(min + '', 10);
    this.price.maxInp = parseInt(max + '', 10);

    if (this.price.minInp > this.price.maxInp) {
      [this.price.minInp, this.price.maxInp] = [
        this.price.maxInp,
        this.price.minInp,
      ];
    }

    if (this.price.maxInp > this.price.max) {
      this.price.maxInp = this.price.max;
    }
  }

  onPriceFiltersSubmit() {
    if (this.filterByPriceGroup.valid) {
      this.filterByPriceGroup.get('min')?.setValue(this.price.minInp);
      this.filterByPriceGroup.get('max')?.setValue(this.price.maxInp);
    }
  }
}
