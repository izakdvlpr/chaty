import { getRepository } from 'typeorm';

import { User } from '../../../entities/User';

import { IDeleteUserRequestDTO } from './DeleteUserDTO';

export class DeleteUserUseCase {
  async execute(data: IDeleteUserRequestDTO) {
    const repository = getRepository(User);
    const { email } = data;
    
    const user = await repository.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found.');
    }
    
    await repository.delete({ email });
  }
}
