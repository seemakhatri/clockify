import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditMembersComponent } from '../edit-members/edit-members.component';
import { AddMembersComponent } from '../add-members/add-members.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  dataSource = [
    { name: 'Project A', email: 'Company X', role: 'Yes', actions: 'Edit/Delete' },
    { name: 'Project B', email: 'Company Y', role: 'No', actions: 'Edit/Delete' },
    { name: 'Project C', email: 'Company Z', role: 'Yes', actions: 'Edit/Delete' },
  ];
  
  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

  }

  navigateToProjectSetting(projectName: string): void {
    this.router.navigate(['/project-setting', projectName]);
  }
  
  

  onSubmit(event: Event) {
    event.preventDefault();
  }

  archiveClient(client: any): void {
    console.log('Archive client:', client);
  }

  openEditModal(): void {
    this.dialog.open(EditMembersComponent, {
      width: '35%',
    });
  }

  addMember() :void{
    this.dialog.open(AddMembersComponent, {
      width: '35%',
    });
  }

}
