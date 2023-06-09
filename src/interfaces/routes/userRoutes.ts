// src/interfaces/routes/userRoutes.ts
import { Router } from "express";
// import { userLoginValidator, userSignupValidator } from "../middlewares/userValidators";
import { userFetchController, userLoginController, userOneFetchController, userSignupController } from "../controllers/userController";

export const userRouter = Router();

userRouter.post("/login", userLoginController);
userRouter.post("/signup", userSignupController);
userRouter.post("/alluser", userFetchController);
userRouter.get('/user',userOneFetchController)