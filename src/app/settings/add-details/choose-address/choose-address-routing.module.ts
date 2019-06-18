import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseAddressComponent } from './choose-address.component';

const routes: Routes = [
  { path:'settings/add-details/choose-address', component: ChooseAddressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseAddressRoutingModule { }
