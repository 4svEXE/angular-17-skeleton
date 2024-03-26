import { Component, SimpleChanges } from '@angular/core';

import { SafeHtml } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, User } from 'src/app/core/services/authentication.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-password-editor',
  templateUrl: './password-editor.component.html',
  styleUrls: ['./password-editor.component.scss', '../../user-profile.component.scss'],
})
export class PasswordEditorComponent {
  user: User | undefined;
  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();
  passwordForm!: FormGroup;
  showPassword = true;

  constructor(
    private svgService: SvgService,
    private userService: UserService,
    private authService: AuthenticationService,
    private fb: FormBuilder,
  ) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    const id = this.authService.getUserIdFromStorage()
    if (id != null ){
      this.userService
      .findOne(id)
      .subscribe((user) => {
        this.user = user;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('user' in changes && changes['user'].currentValue) {
      this.passwordForm.setValue({
        password: this.user?.password,
      });
    }
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Форма відправлена:', this.passwordForm.value);
    } else {
      console.log('Форма невірна, перевірте поля.');
    }
  }
}
