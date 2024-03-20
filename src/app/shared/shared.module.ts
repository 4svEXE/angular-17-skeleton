import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainButtonComponent } from './components/main-button/main-button.component';
import { InputComponent } from './components/input/input.component';

const contenders = [MainButtonComponent];

const modules = [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [contenders, InputComponent],
  imports: [modules],
  exports: [modules, contenders],
})
export class SharedModule { }
