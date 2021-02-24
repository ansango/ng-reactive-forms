import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyActivitiesRoutingModule } from './my-activities-routing.module';
import { MyActivitiesComponent } from './my-activities.component';


@NgModule({
  declarations: [MyActivitiesComponent],
  imports: [
    CommonModule,
    MyActivitiesRoutingModule
  ]
})
export class MyActivitiesModule { }
