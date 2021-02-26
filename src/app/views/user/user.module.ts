import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyFormsModule } from 'src/app/shared/modules/forms/forms.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [CommonModule, UserRoutingModule, MyFormsModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class UserModule {}
