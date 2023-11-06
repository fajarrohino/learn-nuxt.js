export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: Date;
  login: ILogin;
  address: IAddress;
  phone: number;
  website: string;
  company: ICompany;
}

export interface ILogin {
  uuid: string;
  username: string;
  password: string;
  md5: string;
  sha1: string;
  registered: Date;
}
export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: IGeo;
}
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface IGeo {
  lat: number;
  lng: number;
}
