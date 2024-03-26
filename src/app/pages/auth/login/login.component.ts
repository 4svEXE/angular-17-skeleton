import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService, LoginForm } from 'src/app/core/services/authentication.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { switchMap } from 'rxjs';
import { CustomErrorMessages } from 'src/app/core/variables/customFormsErrors';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.styles.scss']
})

export class LoginComponent {
  safeSvgCodes: { [key: string]: SafeHtml } = {};

  errorMessages = CustomErrorMessages;

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
    public ngxSmartModalService: NgxSmartModalService,
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

    // this.authService;
    this.authService
      .login(loginForm)
      .pipe(switchMap(() => this.authService.getUserId()))
      .subscribe((userId) => {
        // console.log('userId', userId);
        this.router.navigate(['user']);
        this.ngxSmartModalService.getModal('popupModal').close()
      });
  }
}

