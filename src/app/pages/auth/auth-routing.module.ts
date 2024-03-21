import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './pages/home/home.component';
// import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'user/:id',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
