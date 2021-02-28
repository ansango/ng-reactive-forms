import { UserType } from "src/app/shared/models/user/user";

export interface IRegister {
    firstName: string;
    lastName: string;
    type: UserType;
    email: string;
    password: string;
    rePassword: string;
}