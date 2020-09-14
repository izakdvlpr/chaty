import { getRepository } from 'typeorm';
import bcrypy from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../../../entities/User';

import { IUserAuthRequestDTO } from './UserAuthDTO';

export class UserAuthUseCase {
  async execute(data: IUserAuthRequestDTO) {
    const repository = getRepository(User);
    const { email, password } = data;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    const isValidPassowrd = await bcrypy.compare(password, user.password);

    if (!isValidPassowrd) {
      throw new Error('Password invalid');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return {
      id: user.id,
      email: user.email,
      token,
    };
  }
}
