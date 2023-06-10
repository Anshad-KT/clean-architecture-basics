import mongoose, { Document, Model, Schema } from 'mongoose';
import { admin } from '../../domain/models/admin';
import { User } from '../../domain/models/user';

export type MongoDBAdmin = Model<Document<any, any, any> & admin>;
export type MongoDBUser = Model<Document<any, any, any> & User>;

// Define the schema for the user collection
const userSchema = new Schema<User>({
  email: String,
  password: String,
  // other fields for the user schema
});

// Define the schema for the admin collection
const adminSchema = new Schema<admin>({
  email: String,
  password: String,
  // other fields for the admin schema
});

// Create the models for the user and admin collections using the schemas
export const userModel: MongoDBUser = mongoose.connection.model<Document<any, any, any> & User>('user', userSchema);
export const adminModel: MongoDBAdmin = mongoose.connection.model<Document<any, any, any> & admin>('admin', adminSchema);
