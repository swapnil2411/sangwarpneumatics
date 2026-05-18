// lib/validations/formValidation.ts

export type ContactFormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  address: string;
  product: string;
  message: string;
};

export type ContactFormErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
};

export const validateContactForm = (
  form: ContactFormData
): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  // Full Name
  if (!form.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  // Email
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      form.email
    )
  ) {
    errors.email = "Invalid email address";
  }

  // Phone
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[0-9]{10,15}$/.test(form.phone)) {
    errors.phone = "Invalid phone number";
  }

  // Product
  if (!form.product.trim()) {
    errors.product = "Please select a product";
  }

  // Message
  if (!form.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};