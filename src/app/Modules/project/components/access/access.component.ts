import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent {

  selectedTable: string = 'tasks'; 
  

  showTable(table: string): void {
    this.selectedTable = table;
  }

  loginForm!: FormGroup;
  displayedColumns: string[] = ['name', 'billRates', 'role', 'actions'];
  dataSource = [
    { name: 'John Doe', billRates: '123 Main St', role: 'Owner', actions: 'Edit/Delete'  },
    { name: 'Jane Smith', billRates: '456 Oak St', role: 'Owner', actions: 'Edit/Delete' },
  ];


  filters = [
    { name: 'Add members', isOpen: false, options: ['Option 1-1', 'Option 1-2', 'Option 1-3'] },
  ];


  toggleDropdown(filter: { isOpen: boolean; }) {
    this.filters.forEach(f => f.isOpen = false);
    filter.isOpen = !filter.isOpen;
  }

  selectOption(filter: { name: any; }, option: any) {
    console.log(`Selected option: ${option} from ${filter.name}`);
  }


  
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.loginForm.value);
  }

  archiveClient(client: any): void {
    console.log('Archive client:', client);
  }

  openEditModal(): void {
    this.dialog.open(ProjectModalComponent, {
      width: '35%',
      height: '85vh'
    });
  }


  newTaskName: string = '';

addNewTask(): void {
  // Handle the form submission logic here
  console.log('Adding new task:', this.newTaskName);
  // You can also perform any necessary actions like updating the dataSource
  // Clear the form after submission if needed
  this.newTaskName = '';
}


}
