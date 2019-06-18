import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateDetailsRoutingModule } from './update-details-routing.module';
import { UpdateDetailsComponent } from './update-details.component';

@NgModule({
  declarations: [UpdateDetailsComponent],
  imports: [
    CommonModule,
    UpdateDetailsRoutingModule
  ]
})
export class UpdateDetailsModule { }
