"use server";

export async function submitContactForm(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}) {
  // Simulate API call or database operation
  console.log("Server Action: Form submitted", formData);
  
  // In a real application, you would send an email or save to database here
  // await db.contacts.create(formData);
  
  return { success: true, message: "Form submitted successfully!" };
}
