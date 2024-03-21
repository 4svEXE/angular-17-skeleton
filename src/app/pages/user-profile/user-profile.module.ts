import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';

import { UserProfileComponent } from './user-profile.component';

const contenders = [UserProfileComponent];
const modules = [SharedModule, UserProfileRoutingModule];

@NgModule({
  declarations: [contenders],
  imports: [modules],
  exports: [modules, contenders],
})
export class UserProfileModule {}
