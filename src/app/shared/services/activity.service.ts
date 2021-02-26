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
    return this.http
      .get<Activity[]>(this.activitiesUrl)
      .pipe(catchError(this.handleError<Activity[]>('getActivities', [])));
  }

  private handleError<T>(operation = 'operation', result: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }

  private log(message: string): void {
    console.log(message);
  }
}
