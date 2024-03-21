import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

import { UserProfileModule } from './user-profile/user-profile.module';

const contenders = [HomeComponent];

const modules = [SharedModule, PagesRoutingModule, UserProfileModule];

@NgModule({
  declarations: [contenders],
  imports: [modules],
  exports: [modules, contenders],
})
export class PagesModule {}
