import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

@NgModule({
  imports: [CommonModule, ActivityRoutingModule, FormsModule],
  declarations: [ActivityListComponent, ActivityDetailComponent],
})
export class ActivityModule {}
