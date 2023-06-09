import { UserRepository, UserRepositoryImpl } from "../../../infra/repositories/userRepository";
import { User } from "../../../domain/models/user";


export const alluser = (UserRepository:UserRepository) => async () => {
    const user = await UserRepository.find();
    user ? user : null
}


export const oneUser = (UserRepositoryImpl:UserRepository) =>async (user:User) => {
    const user1 = await UserRepositoryImpl.findOne(user)
    user1 ? user1 : null    
}