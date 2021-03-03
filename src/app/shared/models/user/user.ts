import { Profile } from "../profile/profile";

export interface User {
  id?: number;
  type: UserType;
  email: string;
  password: string;
}

export enum UserType {
  TOURIST = 'tourist',
  COMPANY = 'company',
}

export interface CurrentUser {
  id?: number;
  firstName?: string;
  lastName?: string;
  type?: UserType;
  email?: string;
}

export interface UserForm extends User, Profile {
  rePassword: string;
}
