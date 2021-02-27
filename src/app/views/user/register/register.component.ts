import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User, UserType } from 'src/app/shared/models/user/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public newUser?: User;
  public registerForm!: FormGroup;
  public options = Object.values(UserType);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(55),
          ],
        ],
        lastName: [
          '',
          [
            Validators.minLength(3),
            Validators.maxLength(55),
            Validators.pattern(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/),
          ],
        ],
        type: [null, Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        rePassword: ['', [Validators.required]],
      },
      { validators: this.checkPasswordEqual }
    );
  }
  onSubmit(form: FormGroup) {
    const user = form.value;
    user.id = new Date().valueOf();
    this.userService.register(user).subscribe((resp) => {
      this.router.navigate(['user/login']);
    });
  }

  checkPasswordEqual(group: FormGroup): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const rePass = group.get('rePassword')?.value;
    if (pass !== rePass) return { different: true };
    return null;
  }
}
