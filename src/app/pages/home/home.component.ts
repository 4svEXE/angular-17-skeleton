import { OptionInterface } from './../../shared/components/select/select.component';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  errorMessages = { required: "Це поле обов'язкове!!!!!" };

  options: OptionInterface[] = [
    {
      value: 'male',
      label: 'чоловік',
    },
    {
      value: 'female',
      label: 'жінка',
    },
  ];

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });
}
