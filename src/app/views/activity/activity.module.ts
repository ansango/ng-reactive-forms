import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { MyActivitiesComponent } from './my-activities/my-activities.component';

@NgModule({
  imports: [CommonModule, ActivityRoutingModule],
  declarations: [ActivityListComponent, ActivityDetailComponent, MyActivitiesComponent],
})
export class ActivityModule {}
