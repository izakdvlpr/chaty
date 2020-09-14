import { UserAuthUseCase } from './UserAuthUseCase';
import { UserAuthController } from './UserAuthController';

const userAuthUseCase = new UserAuthUseCase();

const userAuthController = new UserAuthController(userAuthUseCase);

export { userAuthController };
