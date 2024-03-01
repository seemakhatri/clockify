import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastyModule } from 'ng-toasty';
import { EnterCodeComponent } from './components/enter-code/enter-code.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EnterCodeComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastyModule,
    FormsModule
  ]
})
export class AuthModule { }
