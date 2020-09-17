import axios from 'axios';

import {
  ICreateUserDTO,
  IUserAuthDTO,
  IUserAuthResponse,
  IGetUserResponse,
  IDeleteUserDTO,
} from '../interfaces/index';

const BASE_URL = 'http://localhost:3333';

export default class ChatAPI {
  static createUser(data: ICreateUserDTO) {
    return axios(`${BASE_URL}/register`, {
      method: 'POST',
      data,
    });
  }

  static userAuth(data: IUserAuthDTO) {
    return axios(`${BASE_URL}/auth`, {
      method: 'POST',
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
    return axios.delete(`${BASE_URL}/delete`, {
      data,
    });
  }
}
