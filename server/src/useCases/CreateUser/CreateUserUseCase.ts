import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private usersRepository: any) {}

  async execute(data: ICreateUserRequestDTO) {
    console.log(data);
  }
}
