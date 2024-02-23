import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {

  constructor( private ref: MatDialogRef<ProjectModalComponent>){

  }

  cancel(){
    this.ref.close();

  }

}
