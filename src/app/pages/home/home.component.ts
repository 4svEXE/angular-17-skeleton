import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  errorMessages = {required: "Це поле обов'язкове!!!!!"}

  formGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required)
    }
  )

}
