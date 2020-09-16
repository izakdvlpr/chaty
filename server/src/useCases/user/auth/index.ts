import { UserAuthController } from './UserAuthController';
import { UserAuthUseCase } from './UserAuthUseCase';

const userAuthUseCase = new UserAuthUseCase();

const userAuthController = new UserAuthController(userAuthUseCase);

export { userAuthController };
