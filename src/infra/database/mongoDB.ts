import mongoose, { Collection, Document, Model, Schema } from 'mongoose';

export type MongoDB = mongoose.Collection<Document>;

// Example MongoDB connection code
export const MongoDBImpl: MongoDB = mongoose.connection.collection('your_collection_name');
