import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDetailsComponent } from './add-details.component';

const routes: Routes = [
  { path: 'settings/add-details', component: AddDetailsComponent,
  children: [
    {
      path: 'choose-plan',
      loadChildren: () => import('./choose-plan/choose-plan.module').then(mod => mod.ChoosePlanModule)
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDetailsRoutingModule { }
