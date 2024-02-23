import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { ProjectSettingComponent } from './components/project-setting/project-setting.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AccessComponent } from './components/access/access.component';
import { StatusComponent } from './components/status/status.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: ProjectComponent},
  { path: 'project-setting/:projectName', component: ProjectSettingComponent },
  { path: 'project-modal', component: ProjectModalComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'access', component: AccessComponent},
  { path: 'status', component: StatusComponent},
  { path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
