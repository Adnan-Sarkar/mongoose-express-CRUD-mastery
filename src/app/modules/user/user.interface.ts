import { Model } from "mongoose";

export interface TOrder {
  productName: string;
  price: number;
  quantity: number;
}

interface TUser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?: TOrder[];
}

// define static method
export interface UserModel extends Model<TUser> {
  isUserExists(userId: string): Promise<TUser | null>;
}

export default TUser;
