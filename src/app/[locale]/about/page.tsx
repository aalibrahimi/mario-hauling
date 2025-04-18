"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Truck,
  Recycle,
  Phone,
  MapPin,
  ArrowRight,
  CalendarClock,
  Users,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const t = useTranslations("AboutPage");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Company history timeline data
  const timelineEvents = [
    {
      year: t("history.timeline.founded.year"),
      title: t("history.timeline.founded.title"),
      description: t("history.timeline.founded.description"),
    },
    {
      year: t("history.timeline.expanded.year"),
      title: t("history.timeline.expanded.title"),
      description: t("history.timeline.expanded.description"),
    },
    {
      year: t("history.timeline.ecoFriendly.year"),
      title: t("history.timeline.ecoFriendly.title"),
      description: t("history.timeline.ecoFriendly.description"),
    },
    {
      year: t("history.timeline.bayArea.year"),
      title: t("history.timeline.bayArea.title"),
      description: t("history.timeline.bayArea.description"),
    },
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-green-800 to-green-700 dark:from-green-900 dark:to-green-800">
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white dark:bg-green-700 text-green-800 dark:text-white mb-5 px-3 py-1 text-sm">
              {t("hero.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-green-100">{t("hero.description")}</p>
          </div>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-green-50 dark:bg-green-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <Image
                  src="/image1.jpg"
                  alt="Company mission"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">
                  {t("mission.title")}
                </h2>
                <p className="text-lg mb-6 dark:text-gray-300">
                  {t("mission.description")}
                </p>
                <div className="space-y-4">
                  {[
                    t("mission.features.satisfaction"),
                    t("mission.features.ecoFriendly"),
                    t("mission.features.fastResponse"),
                    t("mission.features.licensed"),
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Guide - NEW SECTION testing this out*/}
      {/* I like this,  going through with it, just change it to spanish when you can */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-white dark:bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-white mb-4">
              {t("pricing.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-400">
              {t("pricing.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("pricing.description")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-green-50 dark:bg-green-950 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">
                  {t("pricing.howPrice.title")}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="dark:text-white">
                      {t("pricing.howPrice.bullet.1")}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="dark:text-white">
                      {t("pricing.howPrice.bullet.2")}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="dark:text-white">
                      {t("pricing.howPrice.bullet.3")}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="dark:text-white">
                      {t("pricing.howPrice.bullet.4")}
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">
                  {t("pricing.priceRanges.title")}
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-green-200 dark:border-green-700 pb-3">
                    <div className="flex justify-between mb-1">
                      <span>{t("pricing.priceRanges.range.1.title")}</span>
                      <span className="font-semibold">$75-125</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("pricing.priceRanges.range.1.desc")}
                    </p>
                  </div>

                  <div className="border-b border-green-200 dark:border-green-700 pb-3">
                    <div className="flex justify-between mb-1">
                      <span>{t("pricing.priceRanges.range.2.title")}</span>
                      <span className="font-semibold">$150-250</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("pricing.priceRanges.range.2.desc")}
                    </p>
                  </div>

                  <div className="border-b border-green-200 dark:border-green-700 pb-3">
                    <div className="flex justify-between mb-1">
                      <span>{t("pricing.priceRanges.range.3.title")}</span>
                      <span className="font-semibold">$275-375</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("pricing.priceRanges.range.3.desc")}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span>{t("pricing.priceRanges.range.4.title")}</span>
                      <span className="font-semibold">$450-550</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("pricing.priceRanges.range.4.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 dark:text-gray-400 italic mb-4">
                *{t("pricing.footNote")}
              </p>
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-600 text-white"
              >
                <Phone className="mr-2 h-4 w-4" /> {t("pricing.getQuote")}
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white dark:bg-black bg-[url('/barrow_600.png')] bg-no-repeat bg-bottom-right"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-white mb-4">
              {t("whyChooseUs.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-400">
              {t("whyChooseUs.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("whyChooseUs.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-green-50 dark:bg-green-950 p-8 rounded-xl"
            >
              <div className="bg-green-200 dark:bg-green-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Truck className="h-8 w-8 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-green-800 dark:text-green-400">
                {t("whyChooseUs.features.fast.title")}
              </h3>
              <p className="text-gray-600 dark:text-white text-center">
                {t("whyChooseUs.features.fast.description")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-green-50 dark:bg-green-950 p-8 rounded-xl"
            >
              <div className="bg-green-200 dark:bg-green-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Recycle className="h-8 w-8 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-green-800 dark:text-green-400">
                {t("whyChooseUs.features.eco.title")}
              </h3>
              <p className="text-gray-600 dark:text-white text-center">
                {t("whyChooseUs.features.eco.description")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-green-50 dark:bg-green-950 p-8 rounded-xl"
            >
              <div className="bg-green-200 dark:bg-green-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck className="h-8 w-8  dark:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-green-800 dark:text-green-400">
                {t("whyChooseUs.features.professional.title")}
              </h3>
              <p className="text-gray-600 dark:text-white text-center">
                {t("whyChooseUs.features.professional.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company History Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-green-50 dark:bg-green-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-white mb-4">
              {t("history.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-400">
              {t("history.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("history.description")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-300 dark:bg-green-700"></div>

              {/* Timeline events */}
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className={`relative mb-12 md:mb-24 flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-black dark:bg-green-100 border-3 border-white dark:border-black z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="bg-white dark:bg-green-900/40 p-6 rounded-lg shadow-lg">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service Areas Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
        className="py-20 bg-white dark:bg-black md:bg-[url('/single_tree.png')] bg-no-repeat bg-contain"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">
                  {t("serviceAreas.title")}
                </h2>
                <p className="text-lg mb-6 dark:text-white text-black dark:bg-green-950/80 2xl:dark:bg-transparent p-2 rounded-sm">
                  {t("serviceAreas.description")}
                </p>
                <div className="space-y-4 dark:bg-green-950/80 2xl:dark:bg-transparent p-2 rounded-sm">
                  {[
                    t("serviceAreas.areas.sanFrancisco"),
                    t("serviceAreas.areas.oakland"),
                    t("serviceAreas.areas.sanJose"),
                    t("serviceAreas.areas.fremont"),
                    t("serviceAreas.areas.paloAlto"),
                    t("serviceAreas.areas.surrounding"),
                  ].map((area, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-5 w-5 text-green-600 dark:text-green-500 mr-3 flex-shrink-0" />
                      <p className="dark:white">{area}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="mr-2 h-4 w-4" />{" "}
                    {t("serviceAreas.callButton")}
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative">
                  <Image
                    src="/image1.jpg"
                    alt="Bay Area map"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                    <h3 className="font-bold text-xl">
                      {t("serviceAreas.coverage.title")}
                    </h3>
                    <p>{t("serviceAreas.coverage.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Meet Our Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-green-50 dark:bg-green-900/20"
      >
        {/* used to have container and px-auto here for the spacing between 3 cards */}
        <div className="">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 mb-4">
              {t("team.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-400">
              {t("team.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("team.description")}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center max-w-md mx-auto ">
            {[
              {
                name: t("team.mario.name"),
                position: t("team.mario.position"),
                image: "/tio.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-green-900/40 rounded-xl  overflow-hidden shadow-lg w-full"
              >
                <div className="h-100 md:h-[500px] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center ">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-400">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 bg-green-700 dark:bg-green-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-green-100 mb-8">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-green-100 text-green-800"
              >
                <Phone className="mr-2 h-5 w-5" /> {t("cta.callButton")}
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-200 text-black dark:text-white hover:bg-green-600"
                >
                  {t("cta.quoteButton")} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
