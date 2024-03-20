import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from 'src/app/core/directives/control-value-accessor.directive';

type InputType = 'text' | 'number' | 'email' | 'password';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent<T> extends ControlValueAccessor<T> {
  @Input() inputId = '';
  @Input() inputType: InputType = 'text';
  @Input() paceholder = '';
  @Input() label = '';
  @Input() customErrorMessages: Record<string, string> = {};
}
