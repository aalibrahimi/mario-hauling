import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import GradientText from "./GradientText";
import { Check, Clock, Mail, MapPin, Phone, Recycle } from "lucide-react";

export function Footer(): React.ReactElement {
  const t = useTranslations("Footer");

  const footerLinks = [
    {
      title: t("nav.company.title"),
      links: [
        { name: t("nav.company.links.1"), href: "/about" },
        { name: t("nav.company.links.2"), href: "/careers" },
        { name: t("nav.company.links.3"), href: "/contact" },
      ],
    },
    {
      title: t("nav.resources.title"),
      links: [
        { name: t("nav.resources.links.1"), href: "/blog" },
        { name: t("nav.resources.links.2"), href: "/docs" },
        { name: t("nav.resources.links.3"), href: "/help" },
      ],
    },
    {
      title: t("nav.legal.title"),
      links: [
        { name: t("nav.legal.links.1"), href: "/privacy" },
        { name: t("nav.legal.links.2"), href: "/terms" },
        { name: t("nav.legal.links.3"), href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white text-green-700 dark:bg-[#000] dark:text-white mt-auto">
      <div className="container mx-auto py-10 text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.4fr] gap-6">
          {/*  left column */}
          <section className="flex flex-col items-start">
            <div className="flex items-center mb-4  ">
              <Image src="/MarioHauling_Logo.png" alt="MarioHauling Logo" draggable={false} height={500} width={500} className="w-12 h-auto" />

              <h3 className="text-xl font-bold w-fit group">
                <span className="relative pb-1">
                  {t("business.name")}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-green-600 w-0 group-hover:w-full transition-all duration-300"></span>
                </span>
              </h3>
            </div>

            {/* description */}
            <div className="flex items-center text-white mb-4 text-left">
              <Check className="inline-flex text-green-400 mr-2 flex-shrink-0" />
              <p className="text-black dark:text-white "> {t("compDesc")}</p>
            </div>
            {/* locaation */}
            <div className="flex items-center text-black dark:text-white">
              <MapPin className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
              <span>{t("business.area")}</span>
            </div>
          </section>
          {/* right column */}
          <section className="flex flex-col md:items-end items-start text-center">
            <h3
              // unneccesary fun heh
              className="text-lg font-bold mb-4 pr-28 relative w-fit group "
            >
              <span className="relative pb-1">
                {t("contact.title")}
                <span className="absolute left-0 bottom-0 h-0.5 bg-green-600 w-0 group-hover:w-full transition-all duration-300 "></span>
              </span>
            </h3>

            <div className="space-y-2">
              {/* contact phone */}
              <p className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <a
                  href="tel:4084492317"
                  className="hover:text-green-400 text-black dark:text-white transition-colors"
                >
                  {t("contact.phone")}
                </a>
              </p>
              {/* avaialabe contact */}
              <p className="flex items-center">
                <Clock className="h-7 w-5 text-green-400 mr-2 py-1" />
                <span className="text-black dark:text-white">
                  {t("contact.available")}
                </span>
              </p>
              {/* email */}
              <p className="flex items-center">
                <Mail className="h-7 w-5 text-green-400 mr-2 pt-1" />
                <a
                  href="mailto:eldulce270670@gmail.com"
                  className="hover:text-green-400 text-black dark:text-white transition-colors"
                >
                  {t("contact.email")}
                </a>
              </p>
            </div>
          </section>
        </div>
        <div className="border-t border-green-600 mt-6 pt-6 text-center text-green-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t("rights")}
          </p>
        </div>

        <div className="mt-10">
          <div className="mt-4 flex flex-row items-center justify-center gap-2">
            <Link
              href="https://codewithali.com/"
              draggable={false}
              target="_blank"
            >
              <Image
                src="/codewithali.png"
                className="w-10 h-auto isolate"
                alt="CodeWithAli Logo"
                draggable={false}
                width={500}
                height={500}
                quality={100}
              />
            </Link>

            <p className="text-slate-400 text-md">
              <Link
                href="https://codewithali.com/"
                draggable={false}
                target="_blank"
                className="font-semiboldm text-gray-600 text-sm dark:text-white"
              >
                {t("cwaMark")} <GradientText>CodeWithAli</GradientText>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
