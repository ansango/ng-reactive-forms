import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

@NgModule({
  imports: [CommonModule, ActivityRoutingModule],
  declarations: [ActivityListComponent, ActivityDetailComponent],
})
export class ActivityModule {}
