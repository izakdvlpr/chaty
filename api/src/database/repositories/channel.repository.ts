import { randomUUID } from 'node:crypto';

import type { Channel, ChannelType } from '@prisma/client';

import { prisma } from '@/database/prisma';

export class ChannelRepository {
  async create(
    data: Record<
      'name' | 'type' | 'description' | 'guildId' | 'categoryId',
      string
    >,
  ): Promise<void> {
    const { name, type, description, guildId, categoryId } = data;

    await prisma.channel.create({
      data: {
        id: randomUUID(),
        type: type as ChannelType,
        name,
        description,
        guildId,
        categoryId,
      },
    });
  }

  async findManyByGuildId(guildId: string): Promise<Partial<Channel>[]> {
    const channels = await prisma.channel.findMany({
      where: {
        guildId,
      },
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
        messages: {
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
        },
        createdAt: true,
      },
    });

    return channels;
  }

  async findByIdAndGuildId(
    data: Record<'channelId' | 'guildId', string>,
  ): Promise<Partial<Channel> | null> {
    const { channelId, guildId } = data;

    const channel = await prisma.channel.findFirst({
      where: {
        id: channelId,
        guildId,
      },
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
        messages: {
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
        },
        createdAt: true,
      },
    });

    if (!channel) {
      return null;
    }

    return channel;
  }
}
