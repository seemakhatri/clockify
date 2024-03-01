import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { WorkSpacesComponent } from './components/work-spaces/work-spaces.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    WorkSpacesComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
