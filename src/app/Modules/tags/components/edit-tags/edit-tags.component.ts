import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-tags',
  templateUrl: './edit-tags.component.html',
  styleUrls: ['./edit-tags.component.scss']
})
export class EditTagsComponent {

  constructor( private ref: MatDialogRef<EditTagsComponent>){

  }

  cancel(){
    this.ref.close();

  }

}
