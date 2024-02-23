import { Component } from '@angular/core';
import { EditGroupsComponent } from '../edit-groups/edit-groups.component';
import { AddGroupsComponent } from '../add-groups/add-groups.component';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  displayedColumns: string[] = ['name', 'access', 'actions'];
  dataSource = [
    { name: 'Project A', access: 'Company X', actions: 'Edit/Delete' },
    { name: 'Project B', access: 'Company Y', actions: 'Edit/Delete' },
    { name: 'Project C', access: 'Company Z', actions: 'Edit/Delete' },
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
    this.dialog.open(EditGroupsComponent, {
      width: '35%',
    });
  }

  addMember() :void{
    this.dialog.open(AddGroupsComponent, {
      width: '35%',
    });
  }

}
