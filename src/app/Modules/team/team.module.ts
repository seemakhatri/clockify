import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './components/team/team.component';
import { MembersComponent } from './components/members/members.component';
import { GroupsComponent } from './components/groups/groups.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { MaterialModule } from '../material/material.module';
import { EditMembersComponent } from './components/edit-members/edit-members.component';
import { AddMembersComponent } from './components/add-members/add-members.component';
import { AddGroupsComponent } from './components/add-groups/add-groups.component';
import { EditGroupsComponent } from './components/edit-groups/edit-groups.component';


@NgModule({
  declarations: [
    TeamComponent,
    MembersComponent,
    GroupsComponent,
    RemindersComponent,
    EditMembersComponent,
    AddMembersComponent,
    AddGroupsComponent,
    EditGroupsComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MaterialModule
  ]
})
export class TeamModule { }
