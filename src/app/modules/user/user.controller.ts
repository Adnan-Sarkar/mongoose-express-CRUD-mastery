import { Request, Response } from "express";
import { UserServices } from "./user.service";

// create a new user
const createUser = async (req: Request, res: Response) => {
  try {
    const userInfo = req.body;

    const newUserInfo = await UserServices.createUserIntoDB(userInfo);

    res.status(400).json({
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

    res.status(400).json({
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

export const UserControllers = {
  createUser,
  getAllUsers,
};
