import { randomUUID } from 'node:crypto';

import type { Guild } from '@prisma/client';

import { prisma } from '@/database/prisma';

export class GuildRepository {
  async create(data: Record<'name' | 'ownerId', string>): Promise<void> {
    const { name, ownerId } = data;

    const guild = await prisma.guild.create({
      data: {
        id: randomUUID(),
        name,
        ownerId,
      },
    });

    await prisma.member.create({
      data: {
        id: randomUUID(),
        guildId: guild.id,
        userId: guild.ownerId,
        joinedAt: new Date(),
      },
    });
  }

  async findMany(): Promise<Partial<Guild>[]> {
    const guilds = await prisma.guild.findMany({
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
        invites: true,
        members: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                discriminator: true,
                createdAt: true,
              },
            },
            joinedAt: true,
          },
        },
        channels: true,
        createdAt: true,
      },
    });

    return guilds;
  }

  async findById(id: string): Promise<Partial<Guild> | null> {
    const guild = await prisma.guild.findFirst({
      where: {
        id,
      },
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
        invites: true,
        members: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                discriminator: true,
                createdAt: true,
              },
            },
            joinedAt: true,
          },
        },
        channels: true,
        createdAt: true,
      },
    });

    if (!guild) {
      return null;
    }

    return guild;
  }

  async findByName(name: string): Promise<Partial<Guild> | null> {
    const guild = await prisma.guild.findFirst({
      where: { name },
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
        invites: true,
        members: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                discriminator: true,
                createdAt: true,
              },
            },
            joinedAt: true,
          },
        },
        channels: true,
        createdAt: true,
      },
    });

    if (!guild) {
      return null;
    }

    return guild;
  }
}
