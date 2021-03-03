import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile/profile';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilesUrl = 'api/profiles';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient, private userService: UserService) {}

  getProfile() {
    const currentUser = this.userService.getCurrentUser();
    return this.http.get<Profile>(`${this.profilesUrl}/${currentUser.id}`);
  }
}
