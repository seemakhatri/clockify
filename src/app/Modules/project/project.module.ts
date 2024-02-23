import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './components/project/project.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { ProjectSettingComponent } from './components/project-setting/project-setting.component';
import { AccessComponent } from './components/access/access.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatusComponent } from './components/status/status.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProjectRoutingModule } from './project-routing.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';






@NgModule({
  declarations: [
    ProjectComponent,
    ProjectModalComponent,
    ProjectSettingComponent,
    AccessComponent,
    SettingsComponent,
    StatusComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    NgApexchartsModule,

  ],
  exports :[
    ProjectComponent
  ]
})
export class ProjectModule { }
