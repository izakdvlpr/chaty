import { randomUUID } from 'node:crypto';

import type { Message } from '@prisma/client';

import { prisma } from '@/database/prisma';

export class MessageRepository {
  async create(
    data: Record<'content' | 'authorId' | 'channelId' | 'guildId', string>,
  ): Promise<Partial<Message>> {
    const { content, authorId, channelId, guildId } = data;

    const message = await prisma.message.create({
      data: {
        id: randomUUID(),
        content,
        authorId,
        channelId,
        guildId,
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
        updatedAt: true,
      },
    });

    return message;
  }

  async findManyByGuildId(guildId: string): Promise<Partial<Message>[]> {
    const messages = await prisma.message.findMany({
      where: {
        guildId,
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
        channel: {
          select: {
            id: true,
            type: true,
            name: true,
            description: true,
            category: {
              select: {
                id: true,
                name: true,
                description: true,
                createdAt: true,
              },
            },
            createdAt: true,
          },
        },
        guild: {
          select: {
            id: true,
            name: true,
            owner: {
              select: {
                id: true,
                username: true,
                discriminator: true,
                createdAt: true,
              },
            },
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    return messages;
  }

  async findManyByChannelId(channelId: string): Promise<Partial<Message>[]> {
    const messages = await prisma.message.findMany({
      where: {
        channelId,
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
        channel: {
          select: {
            id: true,
            type: true,
            name: true,
            description: true,
            category: {
              select: {
                id: true,
                name: true,
                description: true,
                createdAt: true,
              },
            },
            createdAt: true,
          },
        },
        guild: {
          select: {
            id: true,
            name: true,
            owner: {
              select: {
                id: true,
                username: true,
                discriminator: true,
                createdAt: true,
              },
            },
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    return messages;
  }

  async findById(id: string): Promise<Partial<Message> | null> {
    const message = await prisma.message.findFirst({
      where: {
        id,
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
        channel: {
          select: {
            id: true,
            type: true,
            name: true,
            description: true,
            category: {
              select: {
                id: true,
                name: true,
                description: true,
                createdAt: true,
              },
            },
            createdAt: true,
          },
        },
        guild: {
          select: {
            id: true,
            name: true,
            owner: {
              select: {
                id: true,
                username: true,
                discriminator: true,
                createdAt: true,
              },
            },
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!message) {
      return null;
    }

    return message;
  }
}
