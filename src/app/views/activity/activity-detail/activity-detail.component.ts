import { Component, OnInit, Input } from '@angular/core';
import { MyActivitiesService } from 'src/app/shared/services/my-activities.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Activity } from '../../../shared/models/activity/activity';
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent implements OnInit {
  @Input() activity?: Activity & { signedUp?: boolean };
  constructor(
    private userService: UserService,
    private myActivitiesService: MyActivitiesService
  ) {}

  ngOnInit(): void {}

  get isLoggedIn(): boolean {
    return this.userService.isUserLogged();
  }

  get isTourist(): boolean {
    return this.userService.isUserTourist();
  }

  subscription(activity: Activity) {
    this.myActivitiesService.subscribeActivity(activity.id);
  }

  addFavorites(activity: Activity) {
    this.userService.addFavorites(activity);
  }
}
