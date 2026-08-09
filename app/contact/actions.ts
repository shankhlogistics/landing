"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.shankhlogistics.com";

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  try {
    const res = await fetch(`${API_URL}/api/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company, phone, message, subject }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { error: data?.detail ?? "Something went wrong. Please try again." };
    }

    return { success: true };
  } catch {
    return { error: "Unable to reach our servers. Please email us directly at support@shankhlogistics.com" };
  }
}
