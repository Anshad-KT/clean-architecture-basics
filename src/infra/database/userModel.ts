import mongoose, { Document, Model, Schema } from 'mongoose';
import { admin } from '../../domain/models/admin';
import { User } from '../../domain/models/user';


export type MongoDBUser = Model<Document<any, any, any> & User>;

// Define the schema for the user collection
const userSchema = new Schema<User>({
    email: String,
    password: String,
    // other fields for the user schema
  });

  export const userModel: MongoDBUser = mongoose.connection.model<Document<any, any, any> & User>('user', userSchema);
