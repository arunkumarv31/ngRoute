import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateDetailsComponent } from './update-details.component';

const routes: Routes = [
  { path:'update-details', component: UpdateDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDetailsRoutingModule { }
