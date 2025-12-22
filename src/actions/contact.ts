"use server";
import { apiFetch } from "@/lib/apiFetch";
import { ContactInfoApiResponse } from "@/types/contactTypes";

export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const formData = new FormData();
  formData.append("name", `${data.firstName} ${data.lastName}`);
  formData.append("phone", data.phone);
  formData.append("email", data.email);
  formData.append("subject", data.subject);
  formData.append("notes", data.message);

  console.log("formData", formData)

  const result = await apiFetch("/submit/contact-us", {
    method: "POST",
    body: formData,
  });

  if (result.isOk()) {
    return { success: true, message: "Form submitted successfully!" };
  } else {
    console.error("Contact form submission error:", result.error);
    return {
      success: false,
      message: result.error.message || "Failed to submit form",
      errors: (result.error as any).errors
    };
  }
}


import { cache } from "react";

export const getContactInfo = cache(async () => {
  const result = await apiFetch<ContactInfoApiResponse>("/contactinfo", {
    method: "GET",
    cache: "no-store",
  });

  if (result.isOk()) {
    return {
      ...result.value,
      msg_data: {
        ...result.value.msg_data,
      },
    };
  } else {
    console.error("Failed to fetch contact info:", result.error);
    throw new Error(result.error.message || "Failed to fetch contact info");
  }
});
