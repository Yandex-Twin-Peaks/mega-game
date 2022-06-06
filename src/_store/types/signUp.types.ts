export interface ISignUpRequest {
  'first_name': string;
  'second_name': string;
  'login': string;
  'email': string;
  'password': string;
  'phone': string;
}

export interface ISignUpResponse {
  id?: string;
  reason?: string;
}
