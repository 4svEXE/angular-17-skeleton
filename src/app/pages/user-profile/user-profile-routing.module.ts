import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

import { UserProfileComponent } from './user-profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PasswordComponent } from './components/password/password.component';
import { PasswordEditorComponent } from './components/password-editor/password-editor.component';
import { PrivateDatesComponent } from './components/private-dates/private-dates.component';
import { PrivateDatesEditorComponent } from './components/private-dates-editor/private-dates-editor.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SelectedGoodsComponent } from './components/selected-goods/selected-goods.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'private-dates',
        pathMatch: 'full'
      },
      {
        path: 'private-dates',
        component: PrivateDatesComponent,
      },
      {
        path: 'private-dates/edit',
        component: PrivateDatesEditorComponent,
      },
      {
        path: 'password',
        component: PasswordComponent,
      },
      {
        path: 'password/edit',
        component: PasswordEditorComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'selected',
        component: SelectedGoodsComponent,
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
