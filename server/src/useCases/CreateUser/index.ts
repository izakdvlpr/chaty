import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const createUserUseCase = new CreateUserUseCase(null);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
