export type TUserRole = "admin" | "moderator" | "user";

interface IHair {
  color: string;
  type: string;
}

interface ICoordinates {
  lat: number;
  lng: number;
}

interface IAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: ICoordinates;
  country: string;
}

interface IBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface ICompanyAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: ICoordinates;
  country: string;
}

interface ICompany {
  department: string;
  name: string;
  title: string;
  address: ICompanyAddress;
}

interface ICrypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  role: TUserRole;
  maidenName?: string;
  gender?: string;
  phone?: string;
  username?: string;
  birthDate?: string;
  image?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  hair?: IHair;
  ip?: string;
  address?: IAddress;
  macAddress?: string;
  university?: string;
  bank?: IBank;
  company?: ICompany;
  ein?: string;
  ssn?: string;
  userAgent?: string;
  crypto?: ICrypto;
}
