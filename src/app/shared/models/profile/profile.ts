export interface Profile {
  id?: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  phone: string;
  nationality: ProfileNationality;
  nif: string;
  about: string;
  companyName?: string;
  companyDescription?: string;
  CIF?: string;
}

export enum ProfileNationality {
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  PT = 'pt',
}
