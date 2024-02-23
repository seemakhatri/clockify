import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent {
  constructor( private ref: MatDialogRef<AddMembersComponent>){

  }

  cancel(){
    this.ref.close();
  }
}
