import { Request, Response } from 'express';

import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    try {
      await this.deleteUserUseCase.execute({ email });

      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
