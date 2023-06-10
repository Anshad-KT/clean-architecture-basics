import { admin } from "../../../domain/models/admin";
import { adminRepository,AdminRepositoryImpl } from "../../../infra/repositories/adminRepository";
export const adminLogin = (adminRepositoryImpl:adminRepository) => async(email:string,password:string)=>{
    const admin = await adminRepositoryImpl.find(email,password)
    admin ? admin : null
}