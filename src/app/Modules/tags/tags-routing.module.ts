import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './components/tags/tags.component';
import { EditTagsComponent } from './components/edit-tags/edit-tags.component';

const routes: Routes = [
  { path: '', component :TagsComponent},
  { path: 'edit-tags', component: EditTagsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
