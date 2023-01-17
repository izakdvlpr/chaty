import { randomUUID } from 'node:crypto';

import type { Member } from '@prisma/client';

import { prisma } from '@/database/prisma';

export class MemberRepository {
  async create(data: Record<'guildId' | 'userId', string>): Promise<void> {
    const { guildId, userId } = data;

    const hasJoined = await this.findByGuildIdAndUserId({
      guildId,
      userId,
    });

    if (hasJoined) {
      throw new Error('This user is already on the server.');
    }

    await prisma.member.create({
      data: {
        id: randomUUID(),
        guildId,
        userId,
        joinedAt: new Date(),
      },
    });
  }

  async findByGuildIdAndUserId(
    data: Record<'guildId' | 'userId', string>,
  ): Promise<Member | null> {
    const { guildId, userId } = data;

    const member = await prisma.member.findFirst({
      where: {
        guildId,
        userId,
      },
    });

    if (!member) {
      return null;
    }

    return member;
  }
}
