import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { CommonModule } from '@angular/common';

import { MainButtonComponent } from './components/main-button/main-button.component';
import { InputComponent } from './components/input/input.component';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { SelectComponent } from './components/select/select.component';
import { HeaderComponent } from './layout/header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './layout/modal/modal.component';
import { HeaderSmallScreensComponent } from './layout/header/components/header-small-screens/header-small-screens.component';
import { MobileTabBarComponent } from './layout/header/components/mobile-tab-bar/mobile-tab-bar.component';
import { SearchComponent } from './layout/header/components/search/search.component';
import { NavSubMenuComponent } from './layout/nav-sub-menu/nav-sub-menu.component';

const contenders = [
  MainButtonComponent,
  InputComponent,
  SelectComponent,
  ModalComponent,
  HeaderComponent,
  HeaderSmallScreensComponent,
  MobileTabBarComponent,
  NavSubMenuComponent
];

const modules = [
  CommonModule,
  SharedRoutingModule,
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: [contenders, ValidationErrorsComponent, SearchComponent],
  imports: [modules, NgxSmartModalModule.forRoot()],
  exports: [modules, contenders],
})
export class SharedModule {}
