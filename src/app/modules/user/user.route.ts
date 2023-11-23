import exxpress from "express";
import { UserControllers } from "./user.controller";

const userRouter = exxpress.Router();

// userRouter.post("/users", userControllers.createUser);
userRouter.route("/users").post(UserControllers.createUser);

export const UserRoutes = userRouter;
