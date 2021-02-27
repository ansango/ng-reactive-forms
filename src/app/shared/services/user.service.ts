import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { User } from '../models/user/user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private loggedUser?: boolean = false;
  private user?: User;
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
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }),
      first()
    );
    $user.subscribe((user) => ((this.user = user), (this.loggedUser = true)));
    return $user;
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedUser = false;
  }

  isUserLogged(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  isUserTourist(): boolean {
    if (this.getUserType() === 'tourist') return true;
    return false;
  }

  isUserCompany(): boolean {
    if (this.getUserType() === 'company') return true;
    return false;
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserType(): string {
    const user = localStorage.getItem('user');
    if (user === null) return '';
    return JSON.parse(user)[0].type;
  }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }
}
