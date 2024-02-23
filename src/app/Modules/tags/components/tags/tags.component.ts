import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditTagsComponent } from '../edit-tags/edit-tags.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  displayedColumns: string[] = ['name', 'actions'];
  dataSource = [
    { name: 'Project A', actions: 'Edit/Delete' },
    { name: 'Project B', actions: 'Edit/Delete' },
    { name: 'Project C', actions: 'Edit/Delete' },
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
    this.dialog.open(EditTagsComponent, {
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
