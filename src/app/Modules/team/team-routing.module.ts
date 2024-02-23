import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { MembersComponent } from './components/members/members.component';
import { GroupsComponent } from './components/groups/groups.component';
import { RemindersComponent } from './components/reminders/reminders.component';

const routes: Routes = [
  { path: '', component: TeamComponent},
  { path: 'members', component :MembersComponent},
  { path: 'groups', component: GroupsComponent},
   { path: 'reminders', component: RemindersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
