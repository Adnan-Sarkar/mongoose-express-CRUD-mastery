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

userRouter
  .route("/users/:userId/orders")
  .get(UserControllers.getAllOrderOfUser)
  .put(UserControllers.addProductIntoOrder);

userRouter
  .route("/users/:userId/orders/total-price")
  .get(UserControllers.getTotalPriceOfOrders);

export const UserRoutes = userRouter;
