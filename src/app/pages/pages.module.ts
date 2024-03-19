import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

const contenders = [HomeComponent];

const modules = [BrowserModule, AppRoutingModule, SharedModule];

@NgModule({
  declarations: [contenders],
  imports: [modules],
  exports: [modules, contenders],
})
export class PagesModule {}
