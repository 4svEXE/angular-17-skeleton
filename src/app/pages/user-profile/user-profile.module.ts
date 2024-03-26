import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';

import { UserProfileComponent } from './user-profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PasswordComponent } from './components/password/password.component';
import { PasswordEditorComponent } from './components/password-editor/password-editor.component';
import { PrivateDatesComponent } from './components/private-dates/private-dates.component';
import { PrivateDatesEditorComponent } from './components/private-dates-editor/private-dates-editor.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SelectedGoodsComponent } from './components/selected-goods/selected-goods.component';

const contenders = [
  UserProfileComponent,
  OrdersComponent,
  PasswordComponent,
  LogoutComponent,
  PrivateDatesComponent,
  PasswordEditorComponent,
  PrivateDatesEditorComponent,
  ReviewsComponent,
  SelectedGoodsComponent
];
const modules = [SharedModule, UserProfileRoutingModule];

@NgModule({
  declarations: [contenders],
  imports: [modules],
  exports: [modules, contenders],
})
export class UserProfileModule {}
