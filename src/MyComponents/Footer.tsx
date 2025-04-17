import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import GradientText from "./GradientText";
import { Check, Clock, MapPin, Phone, Recycle } from "lucide-react";

export function Footer(): React.ReactElement {
  const t = useTranslations('Footer')

  const footerLinks = [
    {
      title: t('nav.company.title'),
      links: [
        { name: t('nav.company.links.1'), href: "/about" },
        { name: t('nav.company.links.2'), href: "/careers" },
        { name: t('nav.company.links.3'), href: "/contact" },
      ],
    },
    {
      title: t('nav.resources.title'),
      links: [
        { name: t('nav.resources.links.1'), href: "/blog" },
        { name: t('nav.resources.links.2'), href: "/docs" },
        { name: t('nav.resources.links.3'), href: "/help" },
      ],
    },
    {
      title: t('nav.legal.title'),
      links: [
        { name: t('nav.legal.links.1'), href: "/privacy" },
        { name: t('nav.legal.links.2'), href: "/terms" },
        { name: t('nav.legal.links.3'), href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white text-green-600 dark:bg-[#000] dark:text-white mt-auto">
      <div className="container mx-auto py-10 text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="flex flex-col items-start text-center">
              <div className="flex items-center mb-4">
                <Recycle className="h-6 w-6 text-green-400 mr-2" />
                <h3 className="text-xl font-bold">{t('business.name')}</h3>
              </div>
              <p className="text-black dark:text-white mb-4">
                <Check className="inline-flex text-green-400 mr-2" />
                {t('compDesc')}
              </p>
              <div className="flex items-center space-x-2 text-black dark:text-white">
                <MapPin className="h-5 w-5 text-green-400" />
                <span>{t('business.area')}</span>
              </div>
            </section>
            
            <section className="flex flex-col items-center text-center">
              <h3 className="text-lg font-bold mb-4">{t('contact.title')}</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 text-green-400 mr-2" />
                  <a href="tel:4084492317" className="hover:text-green-400 text-black dark:text-white transition-colors">
                    {t('contact.phone')}
                  </a>
                </p>
                <p className="flex items-center">
                  <Clock className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-black dark:text-white">{t('contact.available')}</span>
                </p>
                <p className="flex items-center">
                  <a href="mailto:eldulce270670@gmail.com" className="hover:text-green-400 text-black dark:text-white transition-colors">
                    {t('contact.email')}
                  </a>
                </p>
              </div>
            </section>
          </div>
          <div className="border-t border-green-600 mt-6 pt-6 text-center text-green-600 text-sm">
            <p>&copy; {new Date().getFullYear()} {t('rights')}</p>
          </div>
       
        <div className="mt-10">
          <div className="mt-4 flex flex-row items-center justify-center gap-2">
            <Link href="https://codewithali.com/" draggable={false} target="_blank">
              <Image
                src="/codewithali.png"
                className="w-auto isolate"
                alt="CodeWithAli Logo"
                draggable={false}
                width={30}
                height={30}
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
                {t('cwaMark')} <GradientText>CodeWithAli</GradientText>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}