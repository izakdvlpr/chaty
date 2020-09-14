import { getRepository } from 'typeorm';

import { User } from '../../../entities/User';

import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  async execute(data: ICreateUserRequestDTO) {
    const repository = getRepository(User);
    const { name, email, password } = data;

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      throw new Error('User already exists.');
    }

    const user = repository.create({ name, email, password });

    await repository.save(user);
  }
}
