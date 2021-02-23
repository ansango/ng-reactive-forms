import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserRegister } from 'src/app/shared/models/user/userRegister';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public message: string = '';
  public newUser: UserRegister = new UserRegister();
  public name!: FormControl;
  public surname!: FormControl;
  public type!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public rePassword!: FormControl;
  public registerForm!: FormGroup;

  constructor(private router: Router, private builder: FormBuilder) {}

  ngOnInit(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(55),
    ]);
    this.surname = new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(55),
      Validators.pattern(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/),
    ]);
    // TODO: types selectors ngFor select options, model ?
    this.type = new FormControl('', Validators.required );
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.rePassword = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      // TODO: MustMatch ???
    ]);
    this.registerForm = this.builder.group({
      name: this.name,
      surname: this.surname,
      type: this.type,
      email: this.email,
      password: this.password,
      rePassword: this.rePassword,
    });
  }
  register() {
    this.newUser.name = this.name.value;
    this.newUser.surname = this.surname.value;
    this.newUser.type = this.type.value;
    this.newUser.email = this.email.value;
    this.newUser.password = this.password.value;
    this.newUser.rePassword = this.rePassword.value;
  }
}
