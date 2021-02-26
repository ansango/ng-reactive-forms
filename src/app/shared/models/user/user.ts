export interface User {
  id: number;
  firstName: string;
  lastName: string;
  type: UserType;
  email: string;
  password: string;
  token: string;
}

export enum UserType {
  TOURIST = 'tourist',
  COMPANY = 'company',
}
