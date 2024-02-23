import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSheetRoutingModule } from './time-sheet-routing.module';
import { TimeSheetComponent } from './components/time-sheet/time-sheet.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    TimeSheetComponent
  ],
  imports: [
    CommonModule,
    TimeSheetRoutingModule,
    MaterialModule
  ]
})
export class TimeSheetModule { }
