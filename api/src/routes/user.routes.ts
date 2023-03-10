import { Router } from 'express';

import { UserRepository } from '@/repositories';

export const userRoutes = Router();

const userRepository = new UserRepository();

userRoutes.post('/', async (request, response) => {
  const { username } = request.body;

  try {
    const user = await userRepository.findByUsername(username);

    response.status(200).json({ user });
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});
