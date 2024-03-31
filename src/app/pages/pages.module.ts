import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

import { UserProfileModule } from './user-profile/user-profile.module';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AuthModule } from './auth/auth.module';
import { InfoModule } from './info/info.module';
import { FirstBannerComponent } from './home/components/first-banner/first-banner.component';
import { RecomendetComponent } from './home/components/recomendet/recomendet.component';
import { SecondBannerComponent } from './home/components/second-banner/second-banner.component';
import { ReviewsHomePageComponent } from './home/components/reviews-home-page/reviews-home-page.component';
import { AboutHomePageComponent } from './home/components/about-home-page/about-home-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductsComponent } from './catalog/components/products/products.component';
import { FilterByPriceComponent } from './catalog/components/filter-by-price/filter-by-price.component';
import { FilterButtonComponent } from './catalog/components/filter-button/filter-button.component';
import { FilterOptionComponent } from './catalog/components/filter-option/filter-option.component';
import { FilterOptionsBoxComponent } from './catalog/components/filter-options-box/filter-options-box.component';


const contenders = [
  HomeComponent,
  PopupModalComponent,
  FirstBannerComponent,
  RecomendetComponent,
  SecondBannerComponent,
  ReviewsHomePageComponent,
  AboutHomePageComponent,
  CatalogComponent,
];

const modules = [
  CarouselModule,
  SharedModule,
  PagesRoutingModule,
  UserProfileModule,
  AuthModule,
  InfoModule,
  NgxPaginationModule
];

@NgModule({
  declarations: [contenders, ProductsComponent, FilterByPriceComponent, FilterButtonComponent, FilterOptionComponent, FilterOptionsBoxComponent],
  imports: [modules, NgxSmartModalModule.forRoot()],
  exports: [modules, contenders],
})
export class PagesModule {}
