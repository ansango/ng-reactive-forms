export interface User {
  id: number;
  firstName: string;
  lastName: string;
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
