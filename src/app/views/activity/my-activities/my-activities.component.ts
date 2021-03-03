import { Component, OnInit } from '@angular/core';
import { mergeAll } from 'rxjs/operators';
import { Activity } from 'src/app/shared/models/activity/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { MyActivitiesService } from 'src/app/shared/services/my-activities.service';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.css'],
})
export class MyActivitiesComponent implements OnInit {
  activities?: (Activity & { signedUp?: boolean })[];
  selectedActivity?: Activity & { signedUp?: boolean };
  constructor(
    private activityService: ActivityService,
    private myActivitiesService: MyActivitiesService
  ) {}

  async ngOnInit(): Promise<void> {
    this.getActivities();
    this.myActivitiesService
      .getMyActivities()
      .pipe(mergeAll())
      .subscribe((activity) => {
        const act = this.activities?.find((ac) => ac.id == activity.activityId);
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
