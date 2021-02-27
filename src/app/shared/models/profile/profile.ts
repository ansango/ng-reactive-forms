export interface ProfileTourist {
  id: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  phone: number;
  nationality: ProfileNationality;
  document: ProfileDocument.NIF;
  about: string;
  education: [];
}

export interface ProfileCompany {
  id: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  phone: number;
  nationality: ProfileNationality;
  document: ProfileDocument.CIF;
  about: string;
  companyName: string;
  companyDescription: string;
  education: [];
  activity: [];
}

export enum ProfileNationality {
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  PT = 'pt',
}

export enum ProfileDocument {
  NIF,
  CIF,
}
