import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/shared/models/profile/profile';
import { CurrentUser } from 'src/app/shared/models/user/user';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile?: Profile;
  constructor(
    private router: Router,
    private userService: UserService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  get currentUser(): CurrentUser | undefined {
    return this.userService.getCurrentUser();
  }

  getProfile(): void {
    this.profileService
      .getProfile(this.currentUser)
      .subscribe((profile) => (this.profile = profile));
  }
}
