import mongoose, { ObjectId } from 'mongoose';

export interface MessageTypes extends mongoose.Document {
  user: {
    _id: ObjectId,
    name: string;
  };
  content: string;
}

export const MessageSchema = new mongoose.Schema(
  {
    user: {
      _id: String,
      name: String,
    },
    content: String,
  },
  {
    timestamps: true,
  },
);

export const Message = mongoose.model<MessageTypes>('Message', MessageSchema);
