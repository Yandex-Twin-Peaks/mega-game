import { ISignUpRequest, IUser } from '../types/auth.types';

export const createdUserMock: ISignUpRequest = {
  'first_name': 'Mike',
  'second_name': 'Spring',
  'login': 'spring',
  'email': 'mikespring@mail.com',
  'password': 'mypass55!',
  'phone': '+79008007060'
};

export const userMock: IUser = {
  'id': 17939,
  'first_name': 'Mike',
  'second_name': 'Spring',
  'display_name': null,
  'login': 'spring',
  'avatar': null,
  'email': 'mikespring@mail.com',
  'phone': '+79008007060'
};
