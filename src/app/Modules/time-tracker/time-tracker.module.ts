import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackerRoutingModule } from './time-tracker-routing.module';
import { TimeTrackerComponent } from './components/time-tracker/time-tracker.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    TimeTrackerComponent
  ],
  imports: [
    CommonModule,
    TimeTrackerRoutingModule,
    MaterialModule
  ]
})
export class TimeTrackerModule { }
