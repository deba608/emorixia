"use server";

import { Resend } from "resend";
import { contactFormSchema, newsletterSchema, type ContactFormValues, type NewsletterValues } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY || "mock_key");

export async function submitContactForm(data: ContactFormValues) {
  // Validate input schema server-side
  const validation = contactFormSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: "Validation failed on the server. Please check your fields."
    };
  }

  const { name, email, phone, productType, message } = validation.data;

  // Check if Resend API Key is configured
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "mock_key") {
    console.log(`[Mock Resend Submit]
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Product Type: ${productType}
Message: ${message}`);
    
    // Simulate server processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: "✅ Inquiry received! (Local mock submission successful. Configure RESEND_API_KEY to send actual emails.)"
    };
  }

  try {
    const response = await resend.emails.send({
      from: "Emorixia Inquiry <onboarding@resend.dev>",
      to: "contact@emorixia.in",
      subject: `New Memory Gift Inquiry: ${productType} from ${name}`,
      replyTo: email,
      html: `
        <h2>New Memory Gift Request</h2>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone || "Not provided"}</p>
        <p><strong>Product Type:</strong> ${productType}</p>
        <p><strong>Message Detail:</strong></p>
        <p style="white-space: pre-wrap; padding: 12px; background-color: #f5f5f5; border-radius: 6px;">${message}</p>
        <hr />
        <p style="font-size: 12px; color: #888;">This email was sent dynamically via Emorixia's Next.js Server Actions.</p>
      `,
    });

    if (response.error) {
      console.error("Resend API Error:", response.error);
      return {
        success: false,
        message: `❌ Failed to send inquiry email. Error: ${response.error.message}`
      };
    }

    return {
      success: true,
      message: "✅ Thank you! Your memory gift inquiry has been submitted. We will contact you soon."
    };
  } catch (err: unknown) {
    console.error("Server Action Exception:", err);
    return {
      success: false,
      message: "❌ An unexpected error occurred. Please try contacting us on WhatsApp."
    };
  }
}

export async function submitNewsletter(data: NewsletterValues) {
  const validation = newsletterSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      message: "Please enter a valid email address."
    };
  }

  const { email } = validation.data;

  // Log subscription (simulate DB or list addition)
  console.log(`[Newsletter Sign Up] Email: ${email}`);
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: "Thank you for subscribing to Emorixia!"
  };
}
