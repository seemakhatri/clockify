import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectModalComponent } from 'src/app/Modules/project/components/project-modal/project-modal.component';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent {
  bsValue = new Date();
   bsRangeValue: Date[];
   maxDate = new Date();
   minDate = new Date();


   constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
   }

  displayedColumns: string[] = ['timeEntry', 'amount', 'user', 'time', 'duration'];
  dataSource = [
    { timeEntry: 'Project A', amount: 'Company X', user: 'Yes', time: 5000, duration: 75},
    { timeEntry: 'Project B', amount: 'Company Y', user: 'No', time: 8000, duration: 50},
    { timeEntry: 'Project C', amount: 'Company Z', user: 'Yes', time: 3000, duration: 25},
  ];
  
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
    { name: 'Active', isOpen: false, options: ['Option 1-1', 'Option 1-2', 'Option 1-3'] },
    { name: 'Client', isOpen: false, options: ['Option 2-1', 'Option 2-2', 'Option 2-3'] },
    { name: 'Access', isOpen: false, options: ['Option 3-1', 'Option 3-2', 'Option 3-3'] },
    { name: 'Billing', isOpen: false, options: ['Option 3-1', 'Option 3-2', 'Option 3-3'] }
  ];

  toggleDropdown(filter: { isOpen: boolean; }) {
    this.filters.forEach(f => f.isOpen = false);
    filter.isOpen = !filter.isOpen;
  }

  selectOption(filter: { name: any; }, option: any) {
    console.log(`Selected option: ${option} from ${filter.name}`);
  }


}
