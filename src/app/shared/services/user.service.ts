import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    console.log(email, password);
  }
  register(user: {}): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  getAll() {
    return this.http.get<User[]>(this.usersUrl);
  }
}
