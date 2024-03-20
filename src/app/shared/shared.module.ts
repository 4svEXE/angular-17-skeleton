import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainButtonComponent } from './components/main-button/main-button.component';
import { InputComponent } from './components/input/input.component';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { SelectComponent } from './components/select/select.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SharedRoutingModule } from './shared-routing.module';

const contenders = [MainButtonComponent, InputComponent, SelectComponent, HeaderComponent];

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  SharedRoutingModule
];

@NgModule({
  declarations: [contenders, ValidationErrorsComponent, ],
  imports: [modules],
  exports: [modules, contenders],
})
export class SharedModule {}
