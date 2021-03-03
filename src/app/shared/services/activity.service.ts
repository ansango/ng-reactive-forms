import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Activity } from '../models/activity/activity';
import { UserType } from '../models/user/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activitiesUrl = 'api/activities';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient, private userService: UserService) {}

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl);
  }

  getActivity(id: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl + '/' + id);
  }

  postActivity(activity: Activity): Observable<Activity> {
    if (!this.userService.isUserLogged() || this.userService.getLocaleUser().type == UserType.TOURIST) {
      return throwError(403);
    }
    activity.userId = this.userService.getLocaleUser().id!;
    return this.http.post<Activity>(
      this.activitiesUrl,
      activity,
      this.httpOptions
    );
  }
}
