import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { CustomErrorMessages } from 'src/app/core/variables/customFormsErrors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.styles.scss'],
})
export class RegisterComponent {
  title = 'register';
  safeSvgCodes: { [key: string]: SafeHtml } = {};

  errorMessages = CustomErrorMessages;

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(28),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(8),
      Validators.maxLength(28),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(28),
    ]),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private svgService: SvgService
  ) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  onSubmit() {
    if (!this.formGroup.valid) return;

    this.authService
      .registerAndLogin(this.formGroup.value)
      .subscribe((userId) => {
        console.log('userId', userId);

        this.router.navigate(['user/' + userId]);
      });
  }
}
