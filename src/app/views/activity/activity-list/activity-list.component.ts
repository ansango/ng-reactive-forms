import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../shared/models/activity/activity';
import { ACTIVITIES } from '../activity-mock';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {
  activities = ACTIVITIES;
  constructor() {}

  ngOnInit(): void {}
  selectedActivity?: Activity;
  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }
}
