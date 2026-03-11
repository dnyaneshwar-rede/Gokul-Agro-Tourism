import { ADMIN_EMAILS } from "@/constants/admin";

export const isAdminUser = (email?: string) => {
  if (!email) return false;

  return ADMIN_EMAILS.includes(email.toLowerCase());
};