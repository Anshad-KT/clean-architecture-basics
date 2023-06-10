
// src/interfaces/controllers/userControllers.ts
import { Request, Response } from "express";
import { adminRepository, AdminRepositoryImpl } from "../../infra/repositories/adminRepository";
import { adminModel } from "../../infra/database/mongoDB";



const db = adminModel


const adminRepositoryInstance = AdminRepositoryImpl(db); // Use "admins" collection for admin operations

export const adminLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const admin = await adminRepositoryInstance.find(email, password);
  // Handle the result
}