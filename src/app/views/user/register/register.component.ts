import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public message: string = '';
  public registerForm!: FormGroup;
  constructor(private router: Router, private builder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      type: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
    });
  }

  register(registerForm: FormGroup) {
    if (registerForm.invalid) {
      this.message = 'CHECK ERRORS';
      console.log(this.message);
    } else {
      const email: string = registerForm.value.username;
      const password: string = registerForm.value.password;
    }
  }
}
