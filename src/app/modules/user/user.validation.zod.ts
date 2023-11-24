import { z } from "zod";

export const orderSchemaValidation = z
  .object({
    productName: z
      .string({
        invalid_type_error: "Product name must be string",
        required_error: "Product name is required",
      })
      .trim(),
    price: z.number().positive({ message: "Price must be a positive number" }),
    quantity: z
      .number()
      .positive({ message: "quantity must be a positive number" }),
  })
  .required();

export const userSchemaValidation = z.object({
  userId: z.number().positive({ message: "user ID must be a positive number" }),
  username: z
    .string({
      invalid_type_error: "User name must be string",
      required_error: "User name is required",
    })
    .trim(),
  password: z
    .string({
      invalid_type_error: "Password must be string",
      required_error: "Password is required",
    })
    .trim(),
  fullName: z
    .object({
      firstName: z
        .string({
          invalid_type_error: "First name must be string",
          required_error: "First name is required",
        })
        .trim(),
      lastName: z
        .string({
          invalid_type_error: "Last name must be string",
          required_error: "Last name is required",
        })
        .trim(),
    })
    .required(),
  age: z.number().positive({ message: "age must be greater than 0" }),
  email: z.string().email({ message: "invalid email syntax" }),
  isActive: z.boolean({
    required_error: "isActive is required",
    invalid_type_error: "isActive must be a boolean",
  }),
  hobbies: z
    .string({
      invalid_type_error: "Hobbies name must be string",
      required_error: "Minimum one hobby name is required",
    })
    .array(),
  address: z
    .object({
      street: z
        .string({
          invalid_type_error: "Street name must be string",
          required_error: "Street name is required",
        })
        .trim(),
      city: z
        .string({
          invalid_type_error: "City name must be string",
          required_error: "City name is required",
        })
        .trim(),
      country: z
        .string({
          invalid_type_error: "Country name must be string",
          required_error: "Country name is required",
        })
        .trim(),
    })
    .required(),
  orders: z.optional(z.array(orderSchemaValidation)),
});
