export interface ISignInRequest {
  login: string;
  password: string;
}

export interface ISignUpRequest {
  'first_name': string;
  'second_name': string;
  'login': string;
  'email': string;
  'password': string;
  'phone': string;
}

export interface ISignUpResponse {
  id?: number;
}

export interface IUser {
  'id': number;
  'first_name': string;
  'second_name': string;
  'display_name': string;
  'login': string;
  'email': string;
  'phone': string;
  'avatar': string;
}
