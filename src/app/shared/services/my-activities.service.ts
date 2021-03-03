import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class MyActivitiesService {
  private readonly myActivitiesUrl = 'api/myActivities';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient, private userService: UserService) {}

  subscribeActivity(activityId: number) {
    const currentUser = this.userService.getCurrentUser();
    const $activity = this.http.post(
      this.myActivitiesUrl,
      {
        activityId,
        userId: currentUser.id,
      },
      this.httpOptions
    );
    $activity.subscribe();
    return $activity
  }

  getMyActivities() {
    const currentUser = this.userService.getCurrentUser();
    return this.http
      .get<{ activityId: number; userId: number }[]>(this.myActivitiesUrl)
      .pipe(
        mergeAll(),
        filter((activity) => activity.userId == currentUser.id),
        toArray()
      );
  }
}
