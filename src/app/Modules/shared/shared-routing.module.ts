import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WorkSpacesComponent } from './components/work-spaces/work-spaces.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'sidenav', component :SidenavComponent},
  { path: 'work-spaces', component: WorkSpacesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
