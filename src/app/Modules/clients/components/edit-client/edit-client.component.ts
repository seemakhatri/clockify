import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent {
  constructor( private ref: MatDialogRef<EditClientComponent>){

  }

  cancel(){
    this.ref.close();

  }

}
