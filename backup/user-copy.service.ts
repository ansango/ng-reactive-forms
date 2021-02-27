import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { first, map, pluck, tap } from 'rxjs/operators';
import { User, UserType } from '../src/app/shared/models/user/user';

@Injectable()
export class UserCopyService {
  private usersUrl = 'api/users';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private loggedUser?: User;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    const $user = <Observable<User>>this.getAll().pipe(
      map((users) =>
        users.filter((user) => {
          return user.email === email && user.password === password;
        })
      ),
      tap((users) => {
        if (users.length > 1 || users.length === 0) {
          throwError(new Error('user not found'));
        }
      }),
      first()
    );
    $user.subscribe((user) => (this.loggedUser = user));
    return $user;
  }
  register(user: User): Observable<User> {
    user.id = new Date().valueOf();
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  logout(): void {
    this.loggedUser = undefined;
  }

  isUserLogged(): Observable<boolean> {
    return of(!!this.loggedUser);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
