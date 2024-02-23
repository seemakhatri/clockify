import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-groups',
  templateUrl: './edit-groups.component.html',
  styleUrls: ['./edit-groups.component.scss']
})
export class EditGroupsComponent {
  constructor( private ref: MatDialogRef<EditGroupsComponent>){

  }

  cancel(){
    this.ref.close();
  }
}
