// src/infra/database/mongoDB.ts
export type MongoDB = {
    collection: (name: string) => {
      findOne: (query: any) => Promise<any>;
      insertOne: (data: any) => Promise<any>;
    };
  };
  
  // Example MongoDB connection code
  export const MongoDBImpl: MongoDB = {
    collection: (name: string) => ({
      findOne: async (query: any) => null,
      insertOne: async (data: any) => ({ ops: [data] }),
    }),
  };
  