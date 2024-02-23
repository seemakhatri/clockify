import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-members',
  templateUrl: './edit-members.component.html',
  styleUrls: ['./edit-members.component.scss']
})
export class EditMembersComponent {
  constructor( private ref: MatDialogRef<EditMembersComponent>){

  }

  cancel(){
    this.ref.close();
  }
}
