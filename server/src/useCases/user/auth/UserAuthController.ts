import { Request, Response } from 'express';

import { UserAuthUseCase } from './UserAuthUseCase';

export class UserAuthController {
  constructor(private userAuthUseCase: UserAuthUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const user = await this.userAuthUseCase.execute({
        email,
        password,
      });

      return res.json(user);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
