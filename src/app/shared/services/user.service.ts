import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  login(email: string, password: string) {
    console.log(email, password);
  }
  register(userData: {}) {
    console.log(userData);
  }
}
