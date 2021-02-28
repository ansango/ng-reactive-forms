import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private loggedUser?: User;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    const $user = <Observable<User>>this.getAll().pipe(
      map((users) =>
        users.filter(
          (user) => user.email === email && user.password === password
        )
      ),
      tap((users) => {
        if (users.length > 1) {
          throwError({});
        }
      }),
      first()
    );
    $user.subscribe((user) => (this.loggedUser = user));
    return $user;
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  isUserLogged(): Observable<boolean> {
    return of(!!this.loggedUser);
  }

  logout(): void {
    this.loggedUser = undefined;
  }
}
