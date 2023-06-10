import { Model, Document } from 'mongoose';
import { admin } from '../../domain/models/admin';
import { MongoDBAdmin } from '../database/adminModel';

export type adminRepository = {
  find: (email: string, password: string) => Promise<admin | null | false>;
};

export const AdminRepositoryImpl = (AdminModel: MongoDBAdmin): adminRepository => {
  const find = async (email: string, password: string): Promise<admin | null | false> => {
    const admin = await AdminModel.findOne({ email });
    if (admin?.password === password) {
      return admin.toObject();
    }
    return false;
  };

  return {
    find,
  };
}
