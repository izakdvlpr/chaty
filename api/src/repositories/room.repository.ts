import { randomUUID } from 'node:crypto';

import type { Room } from '@prisma/client';

import { prisma } from '@/database/prisma';

export class RoomRepository {
  async create(data: Record<'name', string>): Promise<void> {
    const { name } = data;

    await prisma.room.create({
      data: {
        id: randomUUID(),
        name: name.toLowerCase().replace(' ', '-'),
      },
    });
  }

  async findMany(): Promise<Partial<Room>[]> {
    const rooms = await prisma.room.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
      },
    });

    return rooms;
  }

  async findById(id: string): Promise<Partial<Room> | null> {
    const room = await prisma.room.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
      },
    });

    if (!room) {
      return null;
    }

    return room;
  }
}
