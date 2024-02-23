import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './components/client/client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ClientComponent,
    EditClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule
  ]
})
export class ClientsModule { }
