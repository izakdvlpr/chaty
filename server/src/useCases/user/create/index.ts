import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const createUserUseCase = new CreateUserUseCase();

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
