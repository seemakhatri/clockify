import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {


  selectedTable: string = 'tasks'; 
  

  showTable(table: string): void {
    this.selectedTable = table;
  }

  displayedColumns: string[] = ['name', 'assignes','actions'];
  dataSource = [
    { name: 'Project A', assignes: 'Company X', actions: 'Edit/Delete' },
    { name: 'Project B', assignes: 'Company Y', actions: 'Edit/Delete' },
    { name: 'Project C', assignes: 'Company Z', actions: 'Edit/Delete' },
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
    this.dialog.open(ProjectModalComponent, {
      width: '35%',
    });
  }

  filters = [
    { name: 'Filter 1', isOpen: false, options: ['Option 1-1', 'Option 1-2', 'Option 1-3'] },
  ];

  toggleDropdown(filter: { isOpen: boolean; }) {
    this.filters.forEach(f => f.isOpen = false);
    filter.isOpen = !filter.isOpen;
  }

  selectOption(filter: { name: any; }, option: any) {
    console.log(`Selected option: ${option} from ${filter.name}`);
  }

}
