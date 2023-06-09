// src/infra/repositories/userRepository.ts
import { MongoDB } from "../database/mongoDB";
import { User } from "../../domain/models/user";

export type UserRepository = {
  findByEmail: (email: string) => Promise<User | null>;
  create: (user: User) => Promise<User>;
};

export const UserRepositoryImpl = (db: MongoDB): UserRepository => {
  const findByEmail = async (email: string): Promise<User | null> => {
    // Logic to find a user by email in the database
    const user = await db.collection("users").findOne({ email });
    return user ? user : null;
  };

  const create = async (user: User): Promise<User> => {
    // Logic to create a new user in the database
    const createdUser = await db.collection("users").insertOne(user);
    return createdUser.ops[0];
  };

  return {
    findByEmail,
    create,
  };
};
