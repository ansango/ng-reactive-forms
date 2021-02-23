import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserLogin } from 'src/app/shared/models/user/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public message: string = '';
  public user: UserLogin = new UserLogin();
  public email!: FormControl;
  public password!: FormControl;
  public loginForm!: FormGroup;

  constructor(private router: Router, private builder: FormBuilder) {}

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', Validators.required);
    this.loginForm = this.builder.group({
      email: this.email,
      password: this.password,
    });
  }

  login() {
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    
  }
}
