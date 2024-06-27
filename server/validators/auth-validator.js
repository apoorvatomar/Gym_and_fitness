const { z } = require("zod");

// creating an Schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars." })
    .max(255, { message: "Name must not be more than 255 chars." }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "email must be at least of 3 chars." })
    .max(255, { message: "email must not be more than 255 chars." }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 chars." })
    .max(20, { message: "Phone must not be more than 20 chars." }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least of 6 chars." })
    .max(255, { message: "Password must not be more than 255 chars." }),

  age: z
    .string({ required_error: "age is required" })
    .trim()
    .min(2, { message: "age must be greater then 10" })
    .max(3, { message: "Invalid age." }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "email must be at least of 3 chars." })
    .max(255, { message: "email must not be more than 255 chars." }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least of 6 chars." })
    .max(255, { message: "Password must not be more than 255 chars." }),
});

module.exports = { signupSchema, loginSchema };
