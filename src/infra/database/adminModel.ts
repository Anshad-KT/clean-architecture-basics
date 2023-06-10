import mongoose, { Document, Model, Schema } from 'mongoose';
import { admin } from '../../domain/models/admin';
import { User } from '../../domain/models/user';

export type MongoDBAdmin = Model<Document<any, any, any> & admin>;

// Define the schema for the admin collection
const adminSchema = new Schema<admin>({
    email: String,
    password: String,
    // other fields for the admin schema
  });

  export const adminModel: MongoDBAdmin = mongoose.connection.model<Document<any, any, any> & admin>('admin', adminSchema);
