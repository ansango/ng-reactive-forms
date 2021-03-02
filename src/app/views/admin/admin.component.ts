import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/activity/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  activities?: Activity[];
  selectedActivity?: Activity;
  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

  getActivities(): void {
    this.activityService
      .getActivitiesByUser()
      .subscribe((activities) => (this.activities = activities));
  }
}
