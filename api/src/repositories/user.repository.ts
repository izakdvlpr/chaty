import { randomUUID } from 'node:crypto';

import type { User } from '@prisma/client';

import { prisma } from '@/database/prisma';
import { randomInteger } from '@/utils/number';

export class UserRepository {
  async create(data: Record<'username', string>): Promise<Partial<User>> {
    const { username } = data;

    const user = await prisma.user.create({
      data: {
        id: randomUUID(),
        username,
        discriminator: randomInteger(1000, 5000).toString(),
      },
      select: {
        id: true,
        username: true,
        discriminator: true,
        createdAt: true,
      },
    });

    return user;
  }

  async findByUsername(username: string): Promise<Partial<User>> {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
      select: {
        id: true,
        username: true,
        discriminator: true,
        createdAt: true,
      },
    });

    if (!user) {
      const userCreated = await this.create({ username });

      return userCreated;
    }

    return user;
  }
}
