import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile/profile';
import { CurrentUser } from '../models/user/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilesUrl = 'api/profiles';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getProfile(currentUser: CurrentUser | undefined): Observable<Profile> {
    const url = `${this.profilesUrl}/${currentUser?.id}`;
    return this.http.get<Profile>(url);
  }
}
