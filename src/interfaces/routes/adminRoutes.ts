

import { Router } from "express";
import { adminLoginController } from "../controllers/adminControllers";

export const adminRouter = Router()

adminRouter.get('/login',adminLoginController)