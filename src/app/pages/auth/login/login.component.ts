import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService, LoginForm } from 'src/app/core/services/authentication.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  title = 'register';
  safeSvgCodes: { [key: string]: SafeHtml } = {};

  errorMessages = {
    required: "Це поле обов'язкове.",
    minlength: "Мінімальна довжина 8 символів.",
    maxlength: "Максимальна довжина 28 символів.",
    email: "Це поле має бути заповнено у форматі example@email.com.",
  };

  formGroup = new FormGroup({
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

    const loginForm: LoginForm ={
      email: this.formGroup.get('email')?.value || '',
      password: this.formGroup.get('password')?.value || '',
    };

    this.authService;
    this.authService
      .login(loginForm)
      .pipe(switchMap(() => this.authService.getUserId()))
      .subscribe((userId) => {
        console.log('userId', userId);
        this.router.navigate(['user/' + userId]);
      });
  }
}

