import { Router } from 'express';

import authMiddleware from '@middlewares/authMiddleware';
import { userAuthController } from '@useCases/user/auth';
import { createUserController } from '@useCases/user/create';
import { deleteUserController } from '@useCases/user/delete';

const router = Router();

router.post('/register', (req, res) => createUserController.handle(req, res));
router.post('/auth', (req, res) => userAuthController.handle(req, res));
router.get('/me', authMiddleware, (req, res) =>
  res.send({ userId: req.userId }),
);
router.delete('/delete', (req, res) => deleteUserController.handle(req, res));

export { router };
