import exxpress from "express";
import { UserControllers } from "./user.controller";

const userRouter = exxpress.Router();

userRouter
  .route("/users")
  .post(UserControllers.createUser)
  .get(UserControllers.getAllUsers);

userRouter
  .route("/users/:userId")
  .get(UserControllers.getUserById)
  .put(UserControllers.updateUser)
  .delete(UserControllers.deleteUser);

export const UserRoutes = userRouter;
