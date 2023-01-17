import { Router } from 'express';

import {
  ConnectionRepository,
  GuildRepository,
  MemberRepository,
  ChannelRepository,
  MessageRepository,
} from '@/database/repositories';
import { websocket } from '@/server';

export const guildRoutes = Router();

const connectionRepository = new ConnectionRepository();
const guildRepository = new GuildRepository();
const memberRepository = new MemberRepository();
const channelRepository = new ChannelRepository();
const messageRepositry = new MessageRepository();

guildRoutes.post('/', async (request, response) => {
  const { name, ownerId } = request.body;

  try {
    await guildRepository.create({ name, ownerId });

    response.status(201).send();
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

guildRoutes.get('/', async (_request, response) => {
  const guilds = await guildRepository.findMany();

  response.json({ guilds });
});

guildRoutes.get('/:guildId', async (request, response) => {
  const { guildId } = request.params;

  try {
    const guild = await guildRepository.findById(guildId);

    response.status(200).json({ guild });
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

//

guildRoutes.post('/:guildId/members/join', async (request, response) => {
  const { guildId } = request.params;
  const { userId } = request.body;

  try {
    await memberRepository.create({ guildId, userId });

    response.status(200).end();
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

//

guildRoutes.post('/:guildId/channels', async (request, response) => {
  const { guildId } = request.params;
  const { name, type, description, categoryId } = request.body;

  try {
    await channelRepository.create({
      name,
      type,
      description,
      guildId,
      categoryId,
    });

    response.status(201).send();
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

guildRoutes.get('/:guildId/channels', async (request, response) => {
  const { guildId } = request.params;

  const channels = await channelRepository.findManyByGuildId(guildId);

  response.json({ channels });
});

guildRoutes.get('/:guildId/channels/:channelId', async (request, response) => {
  const { guildId, channelId } = request.params;

  try {
    const channel = await channelRepository.findByIdAndGuildId({
      channelId,
      guildId,
    });

    response.status(200).json({ channel });
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

//

guildRoutes.post(
  '/:guildId/channels/:channelId/messages',
  async (request, response) => {
    const { guildId, channelId } = request.params;
    const { content, authorId } = request.body;

    try {
      const message = await messageRepositry.create({
        content,
        authorId,
        channelId,
        guildId,
      });

      const connection = connectionRepository.findByUserId(authorId);

      if (!connection) {
        response.status(400).json({ error: 'Connection not found.' });

        return;
      }

      const socketId = connection.socketId.toString();

      websocket.to(socketId).emit('messageCreate', message);

      response.status(201).send();
    } catch (error) {
      response.status(400).json({ error: (<Error>error).message });
    }
  },
);

guildRoutes.get(
  '/:guildId/channels/:channelId/messages',
  async (request, response) => {
    const { channelId } = request.params;

    try {
      const messages = await messageRepositry.findManyByChannelId(channelId);

      response.status(200).json({ messages });
    } catch (error) {
      response.status(400).json({ error: (<Error>error).message });
    }
  },
);

guildRoutes.get(
  '/:guildId/channels/:channelId/messages/:messageId',
  async (request, response) => {
    const { messageId } = request.params;

    try {
      const message = await messageRepositry.findById(messageId);

      response.status(200).json({ message });
    } catch (error) {
      response.status(400).json({ error: (<Error>error).message });
    }
  },
);
