import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

const deleteUserUseCase = new DeleteUserUseCase();

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
