import axios from 'axios';

import {
  ICreateUserDTO,
  IUserAuthDTO,
  IUserAuthResponse,
  IProfileResponse,
  IDeleteUserDTO,
} from '../interfaces';

const BASE_URL = 'http://localhost:3333';

export default class ChatAPI {
  static create(data: ICreateUserDTO) {
    return axios.request({
      url: `${BASE_URL}/register`,
      method: 'POST',
      data,
    });
  }

  static auth(data: IUserAuthDTO) {
    return axios.request<IUserAuthResponse>({
      url: `${BASE_URL}/auth`,
      method: 'POST',
      data,
    });
  }

  static profile(token: string) {
    return axios.request<IProfileResponse>({
      url: `${BASE_URL}/me`,
      method: 'GET',
      headers: {
        authorization: token,
      },
    });
  }

  static delete(data: IDeleteUserDTO) {
    return axios.request({
      url: `${BASE_URL}/delete`,
      method: 'DELETE',
      data,
    });
  }
}
