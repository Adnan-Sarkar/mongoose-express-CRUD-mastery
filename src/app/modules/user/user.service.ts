import TUser from "./user.interface";
import User from "./user.model";

// create a new user
const createUserIntoDB = async (userInfo: TUser) => {
  try {
    // checking is user already exist or not
    if (await User.isUserExists(userInfo.userId)) {
      throw new Error("User already exists!");
    }

    const result = await User.create(userInfo);
    // eslint-disable-next-line no-unused-vars
    const { password, orders, _id, __v, ...newUser } = result.toObject();
    return newUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// retrieve a list of all users
const getAllUsersFromDB = async () => {
  try {
    const userList = await User.find().select({
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      address: 1,
      _id: 0,
    });

    return userList;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// retrieve a specific user by ID
const getUserById = async (id: number) => {
  try {
    if (await User.isUserExists(id)) {
      const user = await User.findOne({ userId: id }).select({
        _id: 0,
        __v: 0,
        orders: 0,
        password: 0,
      });

      return user;
    }

    throw new Error("No user found!");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// update user information
const updateUser = async (id: number, updatedInfo: TUser) => {
  try {
    // check using is exists or not
    if (await User.isUserExists(id)) {
      const updatedUser = await User.findOneAndUpdate(
        {
          userId: id,
        },
        {
          $set: updatedInfo,
        },
        {
          new: true,
          runValidators: true,
        },
      ).select({
        _id: 0,
        __v: 0,
        orders: 0,
        password: 0,
      });

      return updatedUser;
    }

    throw new Error("No user found!");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getUserById,
  updateUser,
};
