import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditClientComponent } from 'src/app/Modules/clients/components/edit-client/edit-client.component';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent {
  displayedColumns: string[] = ['name', 'address', 'currency', 'actions'];
  dataSource = [
    { name: 'Project A', address: 'Company X', currency: 'Yes', actions: 'Edit/Delete' },
    { name: 'Project B', address: 'Company Y', currency: 'No', actions: 'Edit/Delete' },
    { name: 'Project C', address: 'Company Z', currency: 'Yes', actions: 'Edit/Delete' },
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
    this.dialog.open(EditClientComponent, {
      width: '35%',
    });
  }

}
