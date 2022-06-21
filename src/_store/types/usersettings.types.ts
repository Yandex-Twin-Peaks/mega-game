export interface IUserSettingsRequest {
  'first_name': string;
  'second_name': string;
  'display_name': string;
  'login': string;
  'email': string;
  'phone': string;
}

export interface IUserSettingsResponse {
  'id': number;
  'first_name': string;
  'second_name': string;
  'display_name': string;
  'login': string;
  'email': string;
  'phone': string;
  'avatar': string;
}
