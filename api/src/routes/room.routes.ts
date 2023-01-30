import { Router } from 'express';

import { RoomRepository, MessageRepository } from '@/repositories';

export const roomRoutes = Router();

const roomRepositry = new RoomRepository();
const messageRepositry = new MessageRepository();

roomRoutes.post('/', async (request, response) => {
  const { name } = request.body;

  try {
    await roomRepositry.create({ name });

    response.status(201).send();
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

roomRoutes.get('/', async (_request, response) => {
  try {
    const rooms = await roomRepositry.findMany();

    response.status(200).json({ rooms });
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

roomRoutes.get('/:roomId', async (request, response) => {
  const { roomId } = request.params;

  try {
    const room = await roomRepositry.findById(roomId);

    if (!room) {
      response.status(400).json({ error: 'Room not found.' });

      return;
    }

    response.status(200).json({ room });
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

//

roomRoutes.post('/:roomId/messages', async (request, response) => {
  const { roomId } = request.params;
  const { content, authorId } = request.body;

  try {
    const message = await messageRepositry.create({
      content,
      authorId,
      roomId,
    });

    request.io.emit('messageCreate', message);

    response.status(201).send();
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});

roomRoutes.get('/:roomId/messages', async (request, response) => {
  const { roomId } = request.params;

  try {
    const messages = await messageRepositry.findManyByRoom(roomId);

    response.status(200).json({ messages });
  } catch (error) {
    response.status(400).json({ error: (<Error>error).message });
  }
});
