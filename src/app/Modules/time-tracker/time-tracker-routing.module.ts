import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTrackerComponent } from './components/time-tracker/time-tracker.component';

const routes: Routes = [
  { path: '', component: TimeTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackerRoutingModule { }
