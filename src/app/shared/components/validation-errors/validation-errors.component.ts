import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ErrorMessages } from 'src/app/core/variables/customFormsErrors';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
})
export class ValidationErrorsComponent implements OnChanges {
  @Input() errors: Record<string, ValidationErrors> | null = {};
  @Input() customErrorMessages: Record<string, string> | null = {};

  errorMessages = ErrorMessages

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
