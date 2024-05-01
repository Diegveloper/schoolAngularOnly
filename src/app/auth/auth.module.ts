import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PanelModule,
    ButtonModule,
    CardModule,
    TableModule,
    PasswordModule,
    InputTextModule,
    ToggleButtonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
