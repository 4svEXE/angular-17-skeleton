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

const contenders = [
  HomeComponent,
  PopupModalComponent,
  FirstBannerComponent,
  RecomendetComponent,
  SecondBannerComponent,
  ReviewsHomePageComponent,
  AboutHomePageComponent,
];

const modules = [
  CarouselModule,
  SharedModule,
  PagesRoutingModule,
  UserProfileModule,
  AuthModule,
  InfoModule,
];

@NgModule({
  declarations: [contenders],
  imports: [modules, NgxSmartModalModule.forRoot()],
  exports: [modules, contenders],
})
export class PagesModule {}
