import { Injectable } from '@angular/core';
import { Activity } from '../models/activity/activity';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activitiesUrl = 'api/activities';
  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl);
  }
}
