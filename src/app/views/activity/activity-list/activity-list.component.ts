import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { Activity } from '../../../shared/models/activity/activity';
import { ACTIVITIES } from '../activity-mock';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {
  activities?: Activity[];
  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.getActivities();
  }
  selectedActivity?: Activity;
  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

  getActivities(): void {
    this.activityService
      .getActivities()
      .subscribe((activities) => (this.activities = activities));
  }
}
