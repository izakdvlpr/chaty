import { randomUUID } from 'node:crypto';

import type { User } from '@prisma/client';

import { prisma } from '@/database/prisma';
import { randomInteger } from '@/utils/number';

export class UserRepository {
  async create(data: Record<'username', string>): Promise<void> {
    const { username } = data;

    await prisma.user.create({
      data: {
        id: randomUUID(),
        username,
        discriminator: randomInteger(1000, 5000).toString(),
      },
    });
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
        createdAt: true,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }
}
