import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

import { UserProfileModule } from './user-profile/user-profile.module';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AuthModule } from './auth/auth.module';
import { InfoModule } from './info/info.module';

const contenders = [HomeComponent, PopupModalComponent];

const modules = [
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
