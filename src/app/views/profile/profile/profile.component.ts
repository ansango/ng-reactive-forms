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
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe(profile => {
      console.log(profile);
    });
  }
}
