import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { CurrentUser, User, UserType } from '../models/user/user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private loggedUser: boolean = false;
  private currentUser?: CurrentUser;
  private typeUser: string = '';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  login(email: string, password: string): Observable<User> {
    const $user = <Observable<User>>this.getAll().pipe(
      map((users) => {
        const user = users.filter((user) => {
          return user.email === email && user.password === password;
        });
        if (user.length === 0) return this.log('user not found');
        this.typeUser = user[0].type;
        this.setLocalUser(user);
        return user;
      }),
      first()
    );
    $user.subscribe(
      (user) => ((this.currentUser = user), (this.loggedUser = true))
    );
    return $user;
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  logout(): void {
    localStorage.clear();
    this.loggedUser = false;
  }

  isUserLogged(): boolean {
    if (localStorage.getItem('currentUser')) return true;
    return this.loggedUser;
  }

  isUserTourist(): boolean {
    if (this.typeUser === 'tourist') return true;
    return false;
  }

  isUserCompany(): boolean {
    if (this.typeUser === 'company') return true;
    return false;
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getCurrentUser(): CurrentUser | undefined {
    const user = localStorage.getItem('currentUser');
    if (!user) return {};
    this.currentUser = JSON.parse(user);
    return this.currentUser;
  }

  setLocalUser(user: User[]): void {
    const _user = user[0];
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        id: _user.id,
        firstName: _user.firstName,
        lastName: _user.lastName,
        email: _user.email,
        type: _user.type,
      })
    );
  }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }
}
