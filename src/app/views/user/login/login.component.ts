import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user/user';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public users!: User[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup): void {
    this.messageService.clear();
    this.userService
      .login(form.value.email, form.value.password)
      .subscribe((resp) => {
        if (resp) this.router.navigate(['/']);
      });
  }
}
