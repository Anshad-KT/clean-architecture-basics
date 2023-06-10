// src/app/usecases/user/signupUser.ts
import { UserRepository } from "../../../infra/repositories/userRepository";
import { User } from "../../../domain/models/user";

export const signupUser = (userRepository: UserRepository) => async (email: string, password: string): Promise<User> => {
  const newUser: User = {
    email,
    password,
  };
  
  const createdUser = await userRepository.create(newUser);
  return createdUser;
};
