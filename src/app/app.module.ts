import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Modules/shared/shared.module';
import { AuthModule } from './Modules/auth/auth.module';
import { CalenderModule } from './Modules/calender/calender.module';
import { ClientsModule } from './Modules/clients/clients.module';
import { DashboardModule } from './Modules/dashboard/dashboard.module';
import { MaterialModule } from './Modules/material/material.module';
import { ProjectModule } from './Modules/project/project.module';
import { ReportsModule } from './Modules/reports/reports.module';
import { SettingsModule } from './Modules/settings/settings.module';
import { TagsModule } from './Modules/tags/tags.module';
import { TeamModule } from './Modules/team/team.module';
import { TimeTrackerModule } from './Modules/time-tracker/time-tracker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    CalenderModule,
    ClientsModule,
    DashboardModule,
    MaterialModule,
    ProjectModule,
    ReportsModule,
    SettingsModule,
    TagsModule,
    TeamModule,
    TimeTrackerModule,
    ReportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
