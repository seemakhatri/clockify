import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './components/tags/tags.component';
import { EditTagsComponent } from './components/edit-tags/edit-tags.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    TagsComponent,
    EditTagsComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    MaterialModule
  ]
})
export class TagsModule { }
