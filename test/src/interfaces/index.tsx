export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUserAuthDTO {
  email: string;
  password: string;
}

export interface IUserAuthResponse {
  id: string;
  email: string;
  token: string;
}

export interface IGetUserResponse {
  userId: string;
}

export interface IDeleteUserDTO {
  email: string;
}
