import { Router } from 'express';

import { UserRepository } from '@/database/repositories';

export const userRoutes = Router();

const userRepository = new UserRepository();

userRoutes.post('/', async (request, response) => {
  const { username } = request.body;

  try {
    await userRepository.create({ username });

    response.status(201).send();
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

userRoutes.get('/', async (_request, response) => {
  const users = await userRepository.findMany();

  response.json({ users });
});

userRoutes.get('/:userId', async (request, response) => {
  const { userId } = request.params;

  try {
    const user = await userRepository.findById(userId);

    response.status(200).json({ user });
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});
