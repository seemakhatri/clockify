import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { CompanySettingsComponent } from './components/company-settings/company-settings.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    CompanySettingsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
