import { randomUUID } from 'node:crypto';

import type { Message } from '@prisma/client';

import { prisma } from '@/database/prisma';

export class MessageRepository {
  async create(
    data: Record<'content' | 'authorId' | 'roomId', string>,
  ): Promise<void> {
    const { content, authorId, roomId } = data;

    await prisma.message.create({
      data: {
        id: randomUUID(),
        content,
        authorId,
        roomId,
      },
    });
  }

  async findManyByRoom(roomId: string): Promise<Partial<Message>[]> {
    const messages = await prisma.message.findMany({
      where: {
        roomId,
      },
      select: {
        id: true,
        content: true,
        author: {
          select: {
            id: true,
            username: true,
            discriminator: true,
            createdAt: true,
          },
        },
        createdAt: true,
      },
    });

    return messages;
  }
}
