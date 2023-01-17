import { Router } from 'express';

import { UserRepository } from '@/database/repositories';

export const usersRoutes = Router();

const userRepository = new UserRepository();

usersRoutes.post('/', async (request, response) => {
  const { username } = request.body;

  try {
    await userRepository.create({ username });

    response.status(201).send();
  } catch (error) {
    response.status(400).json({ message: (<Error>error).message });
  }
});

usersRoutes.get('/', async (_request, response) => {
  const users = await userRepository.findMany();

  response.json({ users });
});

usersRoutes.get('/:userId', async (request, response) => {
  const { userId } = request.params;

  try {
    const user = await userRepository.findById(userId);

    response.status(200).json({ user });
  } catch (error) {
    response.status(400).json({ message: (<Error>error).message });
  }
});
