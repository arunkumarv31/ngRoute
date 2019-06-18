import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { UpdateDetailsModule } from './update-details/update-details.module';
import { AddDetailsModule } from './add-details/add-details.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    UpdateDetailsModule,
    AddDetailsModule
  ]
})
export class SettingsModule { }
