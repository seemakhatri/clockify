import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path: 'auth',

    loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule),

  },
  {

    path: 'shared',

    loadChildren: () => import('./Modules/shared/shared.module').then(m => m.SharedModule),

  },
  {

    path: 'calender',

    loadChildren: () => import('./Modules/calender/calender.module').then(m => m.CalenderModule),

  },
  {

    path: 'clients',

    loadChildren: () => import('./Modules/clients/clients.module').then(m => m.ClientsModule),

  },
  {

    path: 'dashboard',

    loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule),

  },
  {

    path: 'project',

    loadChildren: () => import('./Modules/project/project.module').then(m => m.ProjectModule),

  },
  {

    path: 'reports',

    loadChildren: () => import('./Modules/reports/reports.module').then(m => m.ReportsModule),

  },
  {

    path: 'settings',

    loadChildren: () => import('./Modules/settings/settings.module').then(m => m.SettingsModule),

  },
  {

    path: 'tags',

    loadChildren: () => import('./Modules/tags/tags.module').then(m => m.TagsModule),

  },
  {

    path: 'team',

    loadChildren: () => import('./Modules/team/team.module').then(m => m.TeamModule),

  },
  {

    path: 'time-tracker',

    loadChildren: () => import('./Modules/time-tracker/time-tracker.module').then(m => m.TimeTrackerModule),

  },
  {

    path: 'time-sheet',

    loadChildren: () => import('./Modules/time-sheet/time-sheet.module').then(m => m.TimeSheetModule),

  },
  {

    path: 'report-detail',

    loadChildren: () => import('./Modules/reports/reports.module').then(m => m.ReportsModule),

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
