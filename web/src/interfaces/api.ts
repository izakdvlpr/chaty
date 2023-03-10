export interface User {
  id: string;
  createdAt: Date;
  username: string;
  discriminator: string;
}

export type Author = User;

export interface Message {
  id: string;
  content: string;
  author: Author;
  createdAt: Date;
}

export interface Room {
  id: string;
  name: string;
  messages: Message[];
  createdAt: Date;
}

export interface GetUserResponse {
  user: User;
}

export interface GetRoomsResponse {
  rooms: Room[];
}

export interface GetRoomResponse {
  room: Room;
}

export interface GetMessagesFromRoomResponse {
  messages: Message[];
}
