import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  displayedColumns: string[] = ['name', 'client', 'tracked', 'amount', 'progress', 'access', 'actions'];
  dataSource = [
    { name: 'Project A', client: 'Company X', tracked: 'Yes', amount: 5000, progress: 75, access: 'Public', actions: 'Edit/Delete' },
    { name: 'Project B', client: 'Company Y', tracked: 'No', amount: 8000, progress: 50, access: 'Private', actions: 'Edit/Delete' },
    { name: 'Project C', client: 'Company Z', tracked: 'Yes', amount: 3000, progress: 25, access: 'Public', actions: 'Edit/Delete' },
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



  filters = [
    { name: 'Client', isOpen: false, options: ['Option 1-1', 'Option 1-2', 'Option 1-3'] },
  ];

  toggleDropdown(filter: { isOpen: boolean; }) {
    this.filters.forEach(f => f.isOpen = false);
    filter.isOpen = !filter.isOpen;
  }

  selectOption(filter: { name: any; }, option: any) {
    console.log(`Selected option: ${option} from ${filter.name}`);
  }



}
