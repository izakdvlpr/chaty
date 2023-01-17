import { Router } from 'express';

import { MemberRepository } from '@/database/repositories';

export const membersRoutes = Router();

const memberRepository = new MemberRepository();

membersRoutes.post('/:guildId/members/join', async (request, response) => {
  const { guildId } = request.params;
  const { userId } = request.body;

  try {
    await memberRepository.create({ guildId, userId });

    response.status(200).end();
  } catch (error) {
    response.status(400).json({ message: (<Error>error).message });
  }
});
