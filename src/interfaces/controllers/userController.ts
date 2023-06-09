// src/interfaces/controllers/userController.ts
import { Router, Request, Response } from "express";
import { loginUser } from "../../app/usecases/user/loginUser";
import { signupUser } from "../../app/usecases/user/signupUser";
import { UserRepositoryImpl } from "../../infra/repositories/userRepository";
import { MongoDBImpl } from "../../infra/database/mongoDB";

export const userController = () => {
  const db = MongoDBImpl; // Instantiate MongoDB connection
  const userRepository = UserRepositoryImpl(db);

  const router = Router();

  router.post("/login", async (req: Request, res: Response) => {
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
  });

  router.post("/signup", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await signupUser(userRepository)(email, password);
      res.status(201).json({ message: "Signup successful", user });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return router;
};
