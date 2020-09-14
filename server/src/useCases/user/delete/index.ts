import { DeleteUserUseCase } from './DeleteUserUseCase';
import { DeleteUserController } from './DeleteUserController';

const deleteUserUseCase = new DeleteUserUseCase();

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
