import { Schema, Document } from 'mongoose';

// Define the User schema
export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Interface for the User document (for type safety)
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
}
