import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

const contenders = [RegisterComponent, LoginComponent];
const modules = [SharedModule, AuthRoutingModule];

@NgModule({
  declarations: [contenders],
  imports: [modules],
  exports: [modules, contenders],
})
export class AuthModule {}
