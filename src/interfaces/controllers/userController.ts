// src/interfaces/controllers/userControllers.ts
import { Request, Response } from "express";
import { loginUser } from "../../app/usecases/user/loginUser";
import { oneUser } from "../../app/usecases/user/fetchOneUser";
import { signupUser } from "../../app/usecases/user/signupUser";
import { UserRepositoryImpl } from "../../infra/repositories/userRepository";
import { MongoDBImpl } from "../../infra/database/mongoDB";
import { alluser } from "../../app/usecases/user/fetchUsers";

const db = MongoDBImpl; // Instantiate MongoDB connection
const userRepository = UserRepositoryImpl(db);

export const userLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(userRepository)(email, password);
    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const userSignupController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await signupUser(userRepository)(email, password);
    res.status(201).json({ message: "Signup successful", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const userFetchController = async (req:Request,res:Response) => {
   try {
    const result = await alluser(userRepository)();
    res.status(201).json({ message: "data found", result });
   } catch (error) {
    res.status(500).json({ message: "Internal server error" });
   }
}

export const userOneFetchController = async (req:Request,res:Response) => {
  try {
    const {user} = req.body
    const userDetails = await oneUser(userRepository)(user)
    res.status(201).json({ message: "data found", userDetails });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}