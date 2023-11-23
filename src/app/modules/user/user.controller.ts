import { Request, Response } from "express";
import { UserServices } from "./user.service";

// create a new user
const createUser = async (req: Request, res: Response) => {
  try {
    const userInfo = req.body;

    const newUserInfo = await UserServices.createUserIntoDB(userInfo);

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      data: newUserInfo,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "User is not created",
      error: {
        code: 400,
        description: error.message || "User is not created",
      },
    });
  }
};

// retrieve a list of all users
const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const userList = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: userList,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Users not found!",
      error: {
        code: 400,
        description: error.message || "Users not found!",
      },
    });
  }
};

// retrieve a specific user by ID
const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await UserServices.getUserById(Number(userId));

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "User not found!",
      error: {
        code: 400,
        description: error.message || "User not found!",
      },
    });
  }
};

// update user information
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userInfo = req.body;

    const updatedUser = await UserServices.updateUser(Number(userId), userInfo);

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: updatedUser,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "User not found!",
      error: {
        code: 400,
        description: error.message || "User not found!",
      },
    });
  }
};

// delete a user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    await UserServices.deleteUser(Number(userId));

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "User not found!",
      error: {
        code: 400,
        description: error.message || "User not found!",
      },
    });
  }
};

// add new product in Order array
const addProductIntoOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const productInfo = req.body;

    await UserServices.addNewOrder(Number(userId), productInfo);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "User not found!",
      error: {
        code: 400,
        description: error.message || "User not found!",
      },
    });
  }
};

// retrieve all orders for a specific user
const getAllOrderOfUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const orderList = await UserServices.getAllOrdersOfUser(Number(userId));

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: orderList,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "User not found!",
      error: {
        code: 400,
        description: error.message || "User not found!",
      },
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addProductIntoOrder,
  getAllOrderOfUser,
};
