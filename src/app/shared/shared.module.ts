import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainButtonComponent } from './components/main-button/main-button.component';
import { InputComponent } from './components/input/input.component';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { SelectComponent } from './components/select/select.component';
import { CommonModule } from '@angular/common';

const contenders = [MainButtonComponent, InputComponent, SelectComponent];

const modules = [
  ReactiveFormsModule,
  FormsModule,
  CommonModule
];

@NgModule({
  declarations: [contenders, ValidationErrorsComponent],
  imports: [modules],
  exports: [modules, contenders],
})
export class SharedModule {}
