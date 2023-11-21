import express from "express";
import { loginUserController,resgisterUserController } from "../dependencies";
import { validateToken } from "../../../helpers/veryfyToken";
export const userRoutes = express.Router();

userRoutes.post('/register',resgisterUserController.run.bind(resgisterUserController)) 
userRoutes.post('/login',loginUserController.run.bind(loginUserController))












