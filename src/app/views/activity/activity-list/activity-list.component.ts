import { Component, OnInit } from '@angular/core';
import { flatMap, mergeAll, tap, toArray } from 'rxjs/operators';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { MyActivitiesService } from 'src/app/shared/services/my-activities.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Activity } from '../../../shared/models/activity/activity';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {
  activities?: (Activity & {signedUp?: boolean})[];
  selectedActivity?: Activity & {signedUp?: boolean};
  constructor(
    private activityService: ActivityService,
    private myActivitiesService: MyActivitiesService
  ) {}

  async ngOnInit(): Promise<void> {
    this.getActivities();
    this.myActivitiesService.getMyActivities()
    .pipe(
      mergeAll()
    ).subscribe(activity => {
      const act = this.activities?.find(ac => ac.id == activity.activityId);
      if (act) {
        act.signedUp = true;
      }
    });
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

  getActivities() {
    const $activities = this.activityService.getActivities();
    $activities.subscribe((activities) => (this.activities = activities));
    return $activities;
  }
}
