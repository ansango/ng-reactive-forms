import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MyActivitiesComponent } from './my-activities/my-activities.component';

const routes: Routes = [
  { path: '', component: ActivityListComponent },
  { path: 'my-activities', component: MyActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
