import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Activity } from '../models/activity/activity';
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
  private currentUser!: CurrentUser;
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

  getFavorites(): Activity[] {
    return JSON.parse(localStorage.getItem('favorites')!) || [];
  }

  addFavorites(activity: Activity): boolean {
    const activities = this.getFavorites();
    activities.push(activity);
    localStorage.setItem('favorites', JSON.stringify(activities));
    return true;
  }
  removeFavorites(): void {
    const activities = this.getFavorites();
  }

  isUserLogged(): boolean {
    const isLoggedIn = Object.entries(this.getLocaleUser()).length !== 0;
    if (isLoggedIn) return (this.loggedUser = isLoggedIn);
    return (this.loggedUser = isLoggedIn);
  }

  isUserTourist(): boolean {
    if (this.typeUser === 'tourist') return true;
    return false;
  }

  isUserCompany(): boolean {
    if (this.typeUser === 'company') return true;
    return false;
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

    this.typeUser = _user.type;
  }

  getLocaleUser(): CurrentUser {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!) || {};
    this.typeUser = this.currentUser.type!;
    this.loggedUser = true;
    return this.currentUser;
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }
}
