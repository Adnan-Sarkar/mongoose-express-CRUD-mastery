import config from "../../config/config";
import TUser, { TOrder } from "./user.interface";
import User from "./user.model";
import bcrypt from "bcrypt";

// create a new user
const createUserIntoDB = async (userInfo: TUser) => {
  try {
    // checking is user already exist or not
    if (await User.isUserExists(userInfo.userId)) {
      throw new Error("User already exists!");
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(
      userInfo.password,
      Number(config.salt_round),
    );

    // set the hash password
    userInfo.password = hashedPassword;

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

    throw new Error(`User with ID ${id} not found!`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// update user information
const updateUser = async (id: number, updatedInfo: TUser) => {
  try {
    // check using is exists or not
    if (await User.isUserExists(id)) {
      // hashing the password
      const hashedPassword = await bcrypt.hash(
        updatedInfo.password,
        Number(config.salt_round),
      );

      // set the hash password
      updatedInfo.password = hashedPassword;

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

    throw new Error(`User with ID ${id} not found!`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// delete a user
const deleteUser = async (id: number) => {
  try {
    // check user exists or not
    if (await User.isUserExists(id)) {
      const result = await User.deleteOne({
        userId: id,
      });

      if (result.deletedCount === 1) {
        return result;
      }
    }

    throw new Error(`User with ID: (${id}) not found!`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// add new product in Order array
const addNewOrder = async (id: number, product: TOrder) => {
  try {
    // check user exists or not
    if (await User.isUserExists(id)) {
      const result = await User.findOneAndUpdate(
        {
          userId: id,
        },
        {
          $push: {
            orders: product,
          },
        },
        {
          runValidators: true,
        },
      );

      console.log(result);

      return;
    }

    throw new Error(`User with ID ${id} not found!`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// retrieve all orders for a specific user
const getAllOrdersOfUser = async (id: number) => {
  try {
    if (await User.isUserExists(id)) {
      const orderList = await User.findOne({
        userId: id,
      }).select({
        orders: 1,
        _id: 0,
      });

      return orderList;
    }

    throw new Error(`User with ID ${id} not found!`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// calculate total price of orders for a specific user
const calculateTotalPriceOfOrders = async (id: number) => {
  try {
    if (await User.isUserExists(id)) {
      const totalPrice = await User.aggregate([
        // statge 1 matching document
        {
          $match: {
            userId: id,
          },
        },

        // stage 2 unwind the orders array
        {
          $unwind: "$orders",
        },

        // stage 3 create group and calculate total price
        {
          $group: {
            _id: null,
            totalPrice: {
              $sum: {
                $multiply: ["$orders.price", "$orders.quantity"],
              },
            },
          },
        },

        // stage 4 re-shape the outpur document
        {
          $project: {
            totalPrice: 1,
            _id: 0,
          },
        },
      ]);

      if (totalPrice[0]) {
        return totalPrice[0];
      }

      throw new Error("Orders is empty");
    }

    throw new Error(`User with ID ${id} not found!`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getUserById,
  updateUser,
  deleteUser,
  addNewOrder,
  getAllOrdersOfUser,
  calculateTotalPriceOfOrders,
};
