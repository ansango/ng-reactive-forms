import { Component, OnInit } from '@angular/core';
import { flatMap, mergeAll, tap, toArray } from 'rxjs/operators';
import { ActivityService } from 'src/app/shared/services/activity.service';
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
    private userService: UserService
  ) {}

  async ngOnInit(): Promise<void> {
    this.getActivities();
    this.userService.getMyActivities()
    .pipe(
      mergeAll()
    ).subscribe(activity => {
      const act = this.activities?.find(ac => ac.id == activity.activityId);
      if (act) {
        act.signedUp = true;
      }
    });
    // let activitiesMapped = await this.userService.getMyActivities()
    // .pipe(
    //   mergeAll(),
    //   flatMap(activity => this.activityService.getActivity(activity.activityId)),
    //   toArray()
    // ).toPromise();
    // console.log(activitiesMapped);
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
