import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { ModalProvider } from "@/components/modal/Modal";
import Header from "@/components/cors/header";
import { getLocale } from "next-intl/server";
import NextProgress from "@/components/next-progress";
import Footer from "@/components/cors/footer";
import { Toaster } from "sonner";
import { getCategories } from "@/actions/categories";
import { getContactInfo } from "@/actions/contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KFconsultant",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const categoriesData = await getCategories();
  const categories = categoriesData.msg_data;
  const contactData = await getContactInfo();
  const contactInfo = contactData.msg_data;

  return (
    <html
      lang={locale === "ar" ? "ar" : "en"}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-white`}
      >
        <NextIntlClientProvider locale={locale}>
          <ModalProvider>
            <Toaster position="top-right" richColors />
            <div className="w-full overflow-x-hidden">
              <NextProgress />
              <Header categories={categories} />
              {children}
              <Footer contactInfo={contactInfo} />
            </div>
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
