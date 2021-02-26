export class User {
  firstName!: string;
  lastName!: string;
  type!: UserType;
  email!: string;
  password!: string;
  token!: string;
}

export enum UserType {
  TOURIST,
  COMPANY,
}
