import { Model, Document } from 'mongoose';
import { User } from '../../domain/models/user';
import { MongoDBUser } from '../database/userModel';

export type UserRepository = {
  findByEmail: (email: string) => Promise<User | null>;
  create: (user: User) => Promise<User>;
  find: () => Promise<User[]>;
  findOne: (user:User) => Promise<User | null>
};

export const UserRepositoryImpl = (UserModel: MongoDBUser): UserRepository => {
  const findByEmail = async (email: string): Promise<User | null> => {
    const user = await UserModel.findOne({ email });
    return user ? user.toObject() : null;
  };

  const create = async (user: User): Promise<User> => {
    const createdUser = await UserModel.create(user);
    return createdUser.toObject();
  };

  const find = async (): Promise<User[]> => {
    const allUsers = await UserModel.find();
    return allUsers.map((user) => user.toObject());
  };

  const findOne = async (user:User):Promise<User | null> => {
    const currentUser = await UserModel.findOne(user);
    return currentUser ? currentUser.toObject() : null;
  };

  return {
    findByEmail,
    create,
    find,
    findOne
  };
};
