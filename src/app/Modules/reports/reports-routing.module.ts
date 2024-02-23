import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDetailComponent } from './components/report-detail/report-detail.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

const routes: Routes = [
  { path: '', component: ReportDetailComponent},
  { path: 'date-picker', component: DatePickerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
