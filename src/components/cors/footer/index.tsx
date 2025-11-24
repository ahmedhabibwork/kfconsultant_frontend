"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="pt-[20px] px-4 snap-start panel overflow-y-auto relative">
      <Image
        alt="Footer Background"
        src="https://admin.dma-mea.com/storage/01JBVT9DBJJE7S4APP40W7YR0S.jpg"
        fill
        className="bg-image object-cover -z-10"
        priority
      />
      <div className="bg-overlay bg-primary/95 absolute inset-0 -z-10"></div>
      <div className="flex justify-between gap-4 max-sm:flex-col pb-[10px] max-w-[60%] mx-auto max-md:max-w-full relative z-10">
        <div>
          <p className="text-white text-sm mb-[12px] uppercase">
            {t("quickLinks.title")}
          </p>
          <div className="flex flex-col gap-2">
            <a className="text-white text-xs" href="/DMA Privacy Policy.docx">
              {t("quickLinks.privacyPolicy")}
            </a>
            <Link className="text-white text-xs" href="/about">
              {t("quickLinks.aboutUs")}
            </Link>
            <Link className="text-white text-xs" href="/contact">
              {t("quickLinks.contactUs")}
            </Link>
            <Link className="text-white text-xs" href="/news">
              {t("quickLinks.blogNews")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-sm mb-[12px] uppercase">
            {t("locations.title")}
          </p>
          <div className="flex flex-col gap-2 text-xs text-white">
            <div className="flex flex-col gap-1">
              <a
                className="flex items-center gap-2"
                href="https://www.google.com/maps/place/%D8%AF%D9%89+%D8%A7%D9%85+%D8%A7%D9%8A%D9%87+-+%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D9%85%D8%B9%D9%85%D8%A7%D8%B1+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%E2%80%AD/@30.0923338,31.3731537,19.43z/data=!4m6!3m5!1s0x1458158dbf37b047:0xee228a3e21f0fe5!8m2!3d30.0921302!4d31.3725772!16s%2Fg%2F11cn6f7wp3?entry=ttu&amp;g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-xs">{t("locations.egyptOffice")}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M25.1597 6.625H18.2828C17.603 6.625 17.0501 7.17804 17.0501 7.85773C17.0501 8.53743 17.603 9.09047 18.2828 9.09047H22.1837L15.6766 15.5975C15.4436 15.8303 15.3154 16.1398 15.3154 16.4692C15.3154 16.7986 15.4436 17.108 15.6764 17.3406C15.9093 17.5737 16.2188 17.702 16.5482 17.702C16.8774 17.702 17.187 17.5738 17.42 17.3408L23.9269 10.8338V14.7346C23.9269 15.4143 24.48 15.9674 25.1597 15.9674C25.8394 15.9674 26.3924 15.4143 26.3924 14.7346V7.85773C26.3924 7.17804 25.8394 6.625 25.1597 6.625Z"
                    fill="white"
                  ></path>
                  <path
                    d="M20.561 24.5117H8.50583V12.4565H17.5725L19.6857 10.3433H7.44921C6.86567 10.3433 6.39258 10.8163 6.39258 11.3999V25.5684C6.39258 26.1519 6.86567 26.625 7.44921 26.625H21.6177C22.2012 26.625 22.6743 26.1519 22.6743 25.5684V13.3318L20.561 15.4451V24.5117Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <p className="text-[12px]">{t("locations.address")}</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-white text-sm mb-[12px] uppercase">
            {t("followUs.title")}
          </p>
          <div className="flex gap-[28px]">
            <a
              target="_blank"
              aria-label="Facebook"
              href="https://www.facebook.com/DMADesignConsultancy"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M14.5086 2.87939C13.282 2.87939 12.1056 3.36667 11.2382 4.23403C10.3709 5.10138 9.88359 6.27777 9.88359 7.50439V10.0794H7.40859C7.28459 10.0794 7.18359 10.1794 7.18359 10.3044V13.7044C7.18359 13.8284 7.28359 13.9294 7.40859 13.9294H9.88359V20.9044C9.88359 21.0284 9.98359 21.1294 10.1086 21.1294H13.5086C13.6326 21.1294 13.7336 21.0294 13.7336 20.9044V13.9294H16.2306C16.3336 13.9294 16.4236 13.8594 16.4486 13.7594L17.2986 10.3594C17.307 10.3262 17.3076 10.2916 17.3006 10.2581C17.2936 10.2246 17.279 10.1932 17.258 10.1662C17.2369 10.1392 17.21 10.1173 17.1793 10.1023C17.1486 10.0873 17.1148 10.0794 17.0806 10.0794H13.7336V7.50439C13.7336 7.40262 13.7536 7.30184 13.7926 7.20781C13.8315 7.11379 13.8886 7.02835 13.9606 6.95639C14.0326 6.88442 14.118 6.82734 14.212 6.78839C14.306 6.74944 14.4068 6.72939 14.5086 6.72939H17.1086C17.2326 6.72939 17.3336 6.62939 17.3336 6.50439V3.10439C17.3336 2.98039 17.2336 2.87939 17.1086 2.87939H14.5086Z"
                  className="fill-white group-hover/share:fill-white"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              aria-label="Instagram"
              href="https://www.instagram.com/dma.design.consultancy?igshid=NTc4MTIwNjQ2YQ%3D%3D"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.3087 8.88019C10.5884 8.88019 9.18449 10.2841 9.18449 12.0044C9.18449 13.7247 10.5884 15.1286 12.3087 15.1286C14.029 15.1286 15.4329 13.7247 15.4329 12.0044C15.4329 10.2841 14.029 8.88019 12.3087 8.88019ZM21.679 12.0044C21.679 10.7107 21.6907 9.42863 21.6181 8.13722C21.5454 6.63722 21.2032 5.30597 20.1064 4.2091C19.0071 3.10988 17.6782 2.77003 16.1782 2.69738C14.8845 2.62472 13.6025 2.63644 12.311 2.63644C11.0173 2.63644 9.73527 2.62472 8.44386 2.69738C6.94386 2.77003 5.61261 3.11222 4.51574 4.2091C3.41652 5.30831 3.07667 6.63722 3.00402 8.13722C2.93136 9.43097 2.94308 10.713 2.94308 12.0044C2.94308 13.2958 2.93136 14.5802 3.00402 15.8716C3.07667 17.3716 3.41886 18.7028 4.51574 19.7997C5.61495 20.8989 6.94386 21.2388 8.44386 21.3114C9.73761 21.3841 11.0196 21.3724 12.311 21.3724C13.6048 21.3724 14.8868 21.3841 16.1782 21.3114C17.6782 21.2388 19.0095 20.8966 20.1064 19.7997C21.2056 18.7005 21.5454 17.3716 21.6181 15.8716C21.6931 14.5802 21.679 13.2982 21.679 12.0044ZM12.3087 16.8114C9.64855 16.8114 7.50167 14.6646 7.50167 12.0044C7.50167 9.34425 9.64855 7.19738 12.3087 7.19738C14.9689 7.19738 17.1157 9.34425 17.1157 12.0044C17.1157 14.6646 14.9689 16.8114 12.3087 16.8114ZM17.3126 8.12316C16.6915 8.12316 16.19 7.6216 16.19 7.0005C16.19 6.37941 16.6915 5.87785 17.3126 5.87785C17.9337 5.87785 18.4353 6.37941 18.4353 7.0005C18.4355 7.14798 18.4065 7.29405 18.3502 7.43034C18.2938 7.56663 18.2111 7.69047 18.1069 7.79475C18.0026 7.89904 17.8787 7.98172 17.7425 8.03808C17.6062 8.09443 17.4601 8.12334 17.3126 8.12316Z"
                  className="fill-white group-hover/share:fill-white"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/dma-egypt/"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M4.50587 2.65974C4.50559 3.21634 4.28422 3.75002 3.89045 4.1434C3.49668 4.53677 2.96277 4.75761 2.40618 4.75733C1.84959 4.75705 1.3159 4.53568 0.922528 4.14191C0.529154 3.74815 0.308316 3.21424 0.308594 2.65765C0.308872 2.10105 0.530245 1.56737 0.924012 1.17399C1.31778 0.780619 1.85169 0.559781 2.40828 0.560059C2.96487 0.560337 3.49856 0.78171 3.89193 1.17548C4.28531 1.56924 4.50614 2.10315 4.50587 2.65974ZM4.56883 6.31137H0.371553V19.4488H4.56883V6.31137ZM11.2005 6.31137H7.02423V19.4488H11.1585V12.5548C11.1585 8.71431 16.1638 8.35754 16.1638 12.5548V19.4488H20.3086V11.1277C20.3086 4.65345 12.9004 4.89479 11.1585 8.07422L11.2005 6.31137Z"
                  className="fill-white"
                ></path>
              </svg>
            </a>
          </div>
          <p className="mt-3 text-white">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
