import mongoose from 'mongoose';

export interface UserTypes extends mongoose.Document {
  name: string;
}

export const UserSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model<UserTypes>('User', UserSchema);
