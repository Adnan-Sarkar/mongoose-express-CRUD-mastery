import { z } from "zod";

const orderSchemaValidation = z
  .object({
    productName: z.string().trim(),
    price: z.number().positive({ message: "Price must be a positive number" }),
    quantity: z
      .number()
      .positive({ message: "quantity must be a positive number" }),
  })
  .required();

export const userSchemaValidation = z
  .object({
    userId: z
      .number()
      .positive({ message: "user ID must be a positive number" }),
    username: z.string().trim(),
    password: z.string().trim(),
    fullName: z
      .object({
        firstName: z.string().trim(),
        lastName: z.string().trim(),
      })
      .required(),
    age: z.number().positive({ message: "age must be greater than 0" }),
    email: z.string().email({ message: "invalid email syntax" }),
    isActive: z.boolean({
      required_error: "isActive is required",
      invalid_type_error: "isActive must be a boolean",
    }),
    hobbies: z.string().array(),
    address: z
      .object({
        street: z.string().trim(),
        city: z.string().trim(),
        country: z.string().trim(),
      })
      .required(),
    orders: z.optional(z.array(orderSchemaValidation)),
  })
  .required();
