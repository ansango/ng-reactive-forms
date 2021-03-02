import { Injectable } from '@angular/core';
import { Activity } from '../models/activity/activity';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activitiesUrl = 'api/activities';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl);
  }

  getActivitiesByUser(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl);
  }

  postActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(
      this.activitiesUrl,
      activity,
      this.httpOptions
    );
  }
}
