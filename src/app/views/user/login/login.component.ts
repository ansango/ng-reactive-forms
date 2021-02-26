import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user/user';
import { LoginFormBuilder, LoginFormGroup } from 'src/app/shared/modules/forms/login/login.form';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: LoginFormGroup;
  public users!: User[];

  constructor(
    private router: Router,
    private formBuilder: LoginFormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(event: Event, form: LoginFormGroup): void {
    if (!form.valid) {
      event.preventDefault();
      event.stopPropagation();
      return;
    };
    this.userService.login(form.value.email, form.value.password);
  }
}