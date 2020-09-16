import { getRepository } from 'typeorm';

import { User } from '../../../entities/User';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  async execute(data: ICreateUserRequestDTO) {
    const repository = getRepository(User);
    const { email, name, password } = data;

    const emailAlreadyExist = await repository.findOne({ where: { email } });

    if (emailAlreadyExist) {
      throw new Error('E-mail already registered');
    }

    const nameAlreadyExist = await repository.findOne({ where: { name } });

    if (nameAlreadyExist) {
      throw new Error('Name already registered');
    }

    const user = repository.create({ name, email, password });

    await repository.save(user);
  }
}
