import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public message: string = '';
  public loginForm!: FormGroup;

  constructor(private router: Router, private builder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(loginForm: FormGroup) {
    if (loginForm.invalid) {
      this.message = 'CHECK ERRORS';
      console.log(this.message);
    } else {
      const email: string = loginForm.value.username;
      const password: string = loginForm.value.password;
    }
  }
}
