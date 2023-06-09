import { UserRepository, UserRepositoryImpl } from "../../../infra/repositories/userRepository";
import { User } from "../../../domain/models/user";


export const alluser = (UserRepository:UserRepository) => async () => {
    const user = await UserRepository.find();
    user ? user : null
}


