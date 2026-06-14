import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).optional().or(z.literal("")),
  productType: z.enum([
    "Memory Magazine",
    "Photo Frames",
    "Resin Art",
    "Lippan Art",
    "Gift Boxes",
    "Customized Trophies",
    "Flex and Banner Design",
    "Other Custom Keepsake"
  ], {
    message: "Please select a valid product category."
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
