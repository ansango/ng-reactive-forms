import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFormBuilder } from './form.builder';
import { LoginFormBuilder } from './login/login.form';

@NgModule({
  declarations: [],
  imports: [],
  providers: [MyFormBuilder, LoginFormBuilder],
  exports: [ReactiveFormsModule],
})
export class MyFormsModule { }
