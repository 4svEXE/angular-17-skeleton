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
import { FooterComponent } from './layout/footer/footer.component';
import { MobileTabBarComponent } from './layout/header/components/mobile-tab-bar/mobile-tab-bar.component';
import { SearchComponent } from './layout/header/components/search/search.component';
import { NavSubMenuComponent } from './layout/nav-sub-menu/nav-sub-menu.component';
import { AButtonComponent } from './components/a-button/a-button.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

const contenders = [
  MainButtonComponent,
  InputComponent,
  SelectComponent,
  ModalComponent,
  HeaderComponent,
  FooterComponent,
  HeaderSmallScreensComponent,
  MobileTabBarComponent,
  NavSubMenuComponent,
  ValidationErrorsComponent,
  SearchComponent,
  NavBarComponent,
  AButtonComponent,
  ReviewCardComponent,
  ProductCardComponent,
  BreadcrumbComponent,
];

const modules = [
  CommonModule,
  SharedRoutingModule,
  ReactiveFormsModule,
  FormsModule,
  BreadcrumbModule,
];

@NgModule({
  declarations: [contenders],
  imports: [modules, NgxSmartModalModule.forRoot()],
  exports: [modules, contenders],
})
export class SharedModule {}
