import axios from 'axios';

import {
  ICreateUserDTO,
  IUserAuthDTO,
  IUserAuthResponse,
  IGetUserResponse,
  IDeleteUserDTO,
} from '@interfaces/index';

const BASE_URL = 'http://localhost:3333';

export default class ChatAPI {
  static createUser(data: ICreateUserDTO) {
    return axios.post(`${BASE_URL}/register`, {
      data,
    });
  }

  static userAuth(data: IUserAuthDTO) {
    return axios.get<IUserAuthResponse>(`${BASE_URL}/auth`, {
      data,
    });
  }

  static getUser(token: string) {
    return axios.get<IGetUserResponse>(`${BASE_URL}/me`, {
      headers: {
        authorization: token,
      },
    });
  }

  static deleteUser(data: IDeleteUserDTO) {
    return axios.get(`${BASE_URL}/delete`, {
      data,
    });
  }
}
