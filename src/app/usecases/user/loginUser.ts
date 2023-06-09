// src/app/usecases/user/loginUser.ts
import { UserRepository } from "../../../infra/repositories/userRepository";
import { User } from "../../../domain/models/user";

export const loginUser = (userRepository: UserRepository) => async (email: string, password: string): Promise<User | null> => {
  const user = await userRepository.findByEmail(email);
  if (user && user.password === password) {
    return user;
  };
  return null;
};
