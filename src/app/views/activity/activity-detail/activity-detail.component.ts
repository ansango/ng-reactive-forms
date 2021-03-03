import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Activity } from '../../../shared/models/activity/activity';
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent implements OnInit {
  @Input() activity?: Activity & {signedUp?: boolean};
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get isLoggedIn(): boolean {
    return this.userService.isUserLogged();
  }

  get isTourist(): boolean {
    return this.userService.isUserTourist();
  }

  addFavorites(activity: Activity) {
    this.userService.addFavorites(activity);
  }
}
