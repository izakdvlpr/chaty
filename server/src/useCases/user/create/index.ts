import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const createUserUseCase = new CreateUserUseCase();

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
