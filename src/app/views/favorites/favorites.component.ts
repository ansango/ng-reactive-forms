import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/activity/activity';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites!: Activity[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): Activity[] {
    this.favorites = this.userService.getFavorites();
    return this.favorites;
  }
}
