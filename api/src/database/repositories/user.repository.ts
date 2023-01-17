import { randomUUID } from 'node:crypto';

import type { User } from '@prisma/client';

import { prisma } from '@/database/prisma';
import { randomInteger } from '@/utils/number';

export class UserRepository {
  async create(data: Record<'username', string>): Promise<void> {
    const { username } = data;

    const hasUser = await this.findByUsername(username);

    if (hasUser) {
      throw new Error('A user with this name already exists.');
    }

    const discriminator = randomInteger(1000, 5000).toString();

    await prisma.user.create({
      data: {
        id: randomUUID(),
        username,
        discriminator,
      },
    });
  }

  async findMany(): Promise<Partial<User>[]> {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        discriminator: true,
        createdAt: true,
      },
    });

    return users;
  }

  async findById(id: string): Promise<Partial<User> | null> {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        discriminator: true,
        guilds: {
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
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }

  async findByUsername(username: string): Promise<Partial<User> | null> {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
      select: {
        id: true,
        username: true,
        discriminator: true,
        guilds: {
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
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }
}
