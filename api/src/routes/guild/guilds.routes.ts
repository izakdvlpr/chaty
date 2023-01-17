import { Router } from 'express';

import { GuildRepository } from '@/database/repositories';

import { channelsRoutes } from './channels.routes';
import { membersRoutes } from './members.routes';

export const guildsRoutes = Router();

const guildRepository = new GuildRepository();

guildsRoutes.post('/', async (request, response) => {
  const { name, ownerId } = request.body;

  try {
    await guildRepository.create({ name, ownerId });

    response.status(201).send();
  } catch (error) {
    response.status(400).json({ message: (<Error>error).message });
  }
});

guildsRoutes.get('/', async (_request, response) => {
  const guilds = await guildRepository.findMany();

  response.json({ guilds });
});

guildsRoutes.get('/:guildId', async (request, response) => {
  const { guildId } = request.params;

  try {
    const guild = await guildRepository.findById(guildId);

    response.status(200).json({ guild });
  } catch (error) {
    response.status(400).json({ message: (<Error>error).message });
  }
});

guildsRoutes.use('/members', membersRoutes);

guildsRoutes.use('/channels', channelsRoutes);
