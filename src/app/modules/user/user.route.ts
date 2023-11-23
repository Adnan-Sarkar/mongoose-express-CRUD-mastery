import exxpress from "express";
import { UserControllers } from "./user.controller";

const userRouter = exxpress.Router();

userRouter
  .route("/users")
  .post(UserControllers.createUser)
  .get(UserControllers.getAllUsers);

export const UserRoutes = userRouter;
