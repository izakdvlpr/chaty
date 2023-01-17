type Connection = Record<'userId' | 'socketId', string>;

const connections: Connection[] = [];

export class ConnectionRepository {
  create(data: Record<'userId' | 'socketId', string>): void {
    const { userId, socketId } = data;

    const hasConnection = this.findByUserId(userId);

    if (hasConnection) {
      return;
    }

    connections.push({
      userId,
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
}
