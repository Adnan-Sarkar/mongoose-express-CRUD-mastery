import { Request, Response } from "express";
import { UserServices } from "./user.service";

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

export const UserControllers = {
  createUser,
};
