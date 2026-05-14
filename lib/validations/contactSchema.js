import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required"),

  companyName: z.string().trim().optional(),

  email: z.string().trim().email("Invalid email address"),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Invalid Indian phone number"),

  address: z.string().trim().optional(),

  product: z
    .string()
    .trim()
    .min(1, "Please select a product"),

  message: z.string().trim().min(5, "Message must be at least 5 characters"),
});