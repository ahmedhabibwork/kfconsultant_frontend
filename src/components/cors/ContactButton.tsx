"use client";
import { useRouter } from "@/hooks/useLocaleRouter";
import Button from "../button";

const ContactButton = () => {
  const router = useRouter();
  return <Button text="تواصل معنا" onClick={() => router.push("/contact")} />;
};

export default ContactButton;
