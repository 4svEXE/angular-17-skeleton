import { OptionInterface } from './../../shared/components/select/select.component';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomErrorMessages } from 'src/app/core/variables/customFormsErrors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  errorMessages = CustomErrorMessages;

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
