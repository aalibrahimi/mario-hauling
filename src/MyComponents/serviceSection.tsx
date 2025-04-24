import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

/* eslint-disable */
const ServicesSection = () => {
  const t = useTranslations("HomePage.services");

  const categories = [
    { id: "household", label: t("categories.household") },
    { id: "construction", label: t("categories.construction") },
    { id: "yard", label: t("categories.yard") },
    { id: "commercial", label: t("categories.commercial") },
  ];

  const [activeCategory, setActiveCategory] = useState("household");

  const services = {
    household: [
      {
        icon: "🧺",
        name: t("items.applianceRemoval.name"),
        description: t("items.applianceRemoval.description"),
      },
      {
        icon: "🛋️",
        name: t("items.furnitureHauling.name"),
        description: t("items.furnitureHauling.description"),
      },
      {
        icon: "🗑️",
        name: t("items.householdJunk.name"),
        description: t("items.householdJunk.description"),
      },
    ],
    construction: [
      {
        icon: "🏗️",
        name: t("items.constructionDebris.name"),
        description: t("items.constructionDebris.description"),
      },
      {
        icon: "🧱",
        name: t("items.concreteRemoval.name"),
        description: t("items.concreteRemoval.description"),
      },
      {
        icon: "🏠",
        name: t("items.roofRemoval.name"),
        description: t("items.roofRemoval.description"),
      },
    ],
    yard: [
      {
        icon: "🌿",
        name: t("items.greenWaste.name"),
        description: t("items.greenWaste.description"),
      },
      {
        icon: "🌱",
        name: t("items.dirtRemoval.name"),
        description: t("items.dirtRemoval.description"),
      },
      {
        icon: "🌳",
        name: t("items.yardCleanup.name"),
        description: t("items.yardCleanup.description"),
      },
    ],
    commercial: [
      {
        icon: "🏢",
        name: t("items.commercial.name"),
        description: t("items.commercial.description"),
      },
      {
        icon: "🏘️",
        name: t("items.residential.name"),
        description: t("items.residential.description"),
      },
      {
        icon: "📦",
        name: t("items.warehouse.name"),
        description: t("items.warehouse.description"),
      },
    ],
  };

  return (
    <section className="py-20 bg-white dark:bg-black bg-[url('/trees.png')] bg-no-repeat bg-cover md:bg-[url('/trees.png')] md:bg-no-repeat md:bg-contain md:bg-right">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Simple Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 mb-3">
              {t("title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t("description")}
            </p>
          </div>

          {/* Category Selection */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 sm:px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-green-600 text-white shadow-md dark:bg-green-700"
                      : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-expect-error */} {/* This is error is due to there isnt an index in interface */}
              {services[activeCategory].map((service: any, index: any) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                  className="group"
                >
                  <div className="flex items-center h-22 w-auto pl-2 bg-green-100 dark:bg-white/90 rounded-sm border-b border-gray-300 dark:border-gray-700 hover:shadow-[5px_5px_10px_-5px] shadow-black/20 dark:shadow-none transition-shadow duration-200">
                    <div className="bg-green-50 dark:bg-green-600 rounded-full p-4 mr-6">
                      <span className="text-3xl">{service.icon}</span>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-black mb-1">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 dark:text-black">
                        {service.description}
                      </p>
                    </div>

                    {/* <div className="hidden md:block">
                      <Button 
                        size="sm" 
                        className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-700 hover:bg-green-500 dark:hover:bg-green-700 hover:text-white dark:hover:text-white group-hover:bg-green-600 dark:group-hover:bg-green-700 group-hover:text-white dark:group-hover:text-white transition-colors"
                      >
                        Get Quote
                        <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View All Services Link */}
          {/* <div className="mt-12 text-center">
            <a 
              href="/services" 
              className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors"
            >
              {t('viewAllButton')}
              <ArrowRight className="h-4 w-4 ml-1 animate-pulse" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
