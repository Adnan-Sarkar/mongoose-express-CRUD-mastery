import TUser from "./user.interface";
import User from "./user.model";

// create a new user
const createUserIntoDB = async (userInfo: TUser) => {
  try {
    // checking is user already exist or not
    if (await User.findOne({ userId: userInfo.userId })) {
      throw new Error("User already exists!");
    }

    const newUser = (await User.create(userInfo)).toObject();

    delete newUser.orders, newUser.password, newUser._id, newUser.__v;

    return newUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const UserServices = {
  createUserIntoDB,
};
