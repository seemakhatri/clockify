import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportDetailComponent } from './components/report-detail/report-detail.component';
import { MaterialModule } from '../material/material.module';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReportDetailComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    MaterialModule,
    CarouselModule,
    CollapseModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [AlertConfig, BsDatepickerConfig],
})
export class ReportsModule { }
