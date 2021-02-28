import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserType } from 'src/app/shared/models/user/user';
import { MyFormBuilder } from 'src/app/shared/modules/forms/form.builder';
import { MyFormGroup } from 'src/app/shared/modules/forms/form.group';
import { IRegister } from 'src/app/shared/modules/forms/register/register.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: MyFormGroup<IRegister>;
  public options = Object.values(UserType);

  constructor(
    private router: Router,
    private formBuilder: MyFormBuilder<IRegister>,
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
    this.userService.register(form.value).subscribe();
  }

  checkPasswordEqual(formGroup: AbstractControl): ValidationErrors | null {
    const {password: pass, rePassword: rePass} = (<MyFormGroup<IRegister>>formGroup).value;
    if (pass !== rePass) return { different: true };
    return null;
  }
}
