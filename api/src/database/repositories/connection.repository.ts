type Connection = Record<
  'userId' | 'guildId' | 'channelId' | 'socketId',
  string
>;

const connections: Connection[] = [];

export class ConnectionRepository {
  create(
    data: Record<'userId' | 'guildId' | 'channelId' | 'socketId', string>,
  ): void {
    const { userId, guildId, channelId, socketId } = data;

    connections.push({
      userId,
      guildId,
      channelId,
      socketId,
    });
  }

  findByUserId(userId: string): Connection | null {
    const connection = connections.find(c => c.userId === userId);

    if (!connection) {
      return null;
    }

    return connection;
  }

  findByGuildId(guildId: string): Connection | null {
    const connection = connections.find(c => c.guildId === guildId);

    if (!connection) {
      return null;
    }

    return connection;
  }

  findByChannelId(channelId: string): Connection | null {
    const connection = connections.find(c => c.channelId === channelId);

    if (!connection) {
      return null;
    }

    return connection;
  }
}
