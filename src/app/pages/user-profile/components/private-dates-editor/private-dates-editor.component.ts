import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-private-dates-editor',
  templateUrl: './private-dates-editor.component.html',
  styleUrls: [
    './private-dates-editor.component.scss',
    '../../user-profile.component.scss',
  ],
})
export class PrivateDatesEditorComponent {
  user: User | undefined;
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthenticationService
  ) {
    this.userForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(8)],
      ],
      name: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    const id = this.authService.getUserIdFromStorage();
    if (id != null) {
      this.userService.findOne(id).subscribe((user) => {
        this.user = user;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('user' in changes && changes['user'].currentValue) {
      this.updateFormValues();
    }
  }

  private updateFormValues() {
    this.userForm.setValue({
      email: this.user?.email,
      name: this.user?.username || '',
      phone: this.user?.phone || '',
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Форма відправлена:', this.userForm.value);
    } else {
      console.log('Форма невірна, перевірте поля.');
    }
  }
}
