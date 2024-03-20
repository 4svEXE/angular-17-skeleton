import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
})
export class ValidationErrorsComponent implements OnChanges {
  @Input() errors: Record<string, ValidationErrors> | null = {};
  @Input() customErrorMessages: Record<string, string> | null = {};

  errorMessages: Record<string, string> = {
    required: 'This field is required',
    maxlength: 'Maximum length exceeded',
    minlength: 'Minimum length not met',
    pattern: 'Invalid pattern',
    email: 'Invalid email format',
    unique: 'Value must be unique',

    customError1: 'Custom Error 1 Message',
    customError2: 'Custom Error 2 Message',
    customError3: 'Custom Error 3 Message',
    customError4: 'Custom Error 4 Message',
  };

  ngOnChanges(changes: SimpleChanges): void {
    const { customErrorMessages } = changes;
    if (customErrorMessages) {
      this.errorMessages = {
        ...this.errorMessages,
        ...customErrorMessages.currentValue,
      };
    }
  }
}
