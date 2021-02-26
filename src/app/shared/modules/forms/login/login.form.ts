import { Injectable } from "@angular/core";
import { MyFormGroup } from "../form.group";
import { MyFormBuilder } from "../form.builder";
import { ILogin } from "./login.interface";

export type LoginFormGroup = MyFormGroup<ILogin>;

@Injectable()
export class LoginFormBuilder extends MyFormBuilder<ILogin> {

}