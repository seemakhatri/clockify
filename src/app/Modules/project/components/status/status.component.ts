import { Component, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries } from 'ng-apexcharts';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  trackedHours = {
    billable: 125.07,
    nonBillable: 40.0, // Update with your non-billable hours
    total: 165.07, // Update with your total tracked hours
    totalAmount: 2000.0 // Update with your total amount
  };

  displayedColumns: string[] = ['name', 'assignes', 'tracked', 'amount'];
  dataSource = [
    { name: 'Project A', assignes: 'Company X', tracked: 'Yes', amount: 5000},
    { name: 'Project B', assignes: 'Company Y', tracked: 'No', amount: 8000},
    { name: 'Project C', assignes: 'Company Z', tracked: 'Yes', amount: 3000},
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

  chartSeries: ApexNonAxisChartSeries = [40, 20];

  chartDetails: ApexChart = {
    type: 'donut'
  };


  filters = [
    { name: 'Show all', isOpen: false, options: ['Option 1-1', 'Option 1-2', 'Option 1-3'] },
  ];

  toggleDropdown(filter: { isOpen: boolean; }) {
    this.filters.forEach(f => f.isOpen = false);
    filter.isOpen = !filter.isOpen;
  }

  selectOption(filter: { name: any; }, option: any) {
    console.log(`Selected option: ${option} from ${filter.name}`);
  }


}
