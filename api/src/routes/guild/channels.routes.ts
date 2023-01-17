import { Router } from 'express';

import { ChannelRepository } from '@/database/repositories';

export const channelsRoutes = Router();

const channelRepository = new ChannelRepository();

channelsRoutes.post('/:guildId/channels', async (request, response) => {
  const { guildId } = request.params;
  const { userId } = request.body;
});
