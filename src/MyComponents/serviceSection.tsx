import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const categories = [
    { id: "household", label: "Household" },
    { id: "construction", label: "Construction" },
    { id: "other", label: "Other Services" }
  ];

  const [activeCategory, setActiveCategory] = useState("household");

  const services = {
    household: [
      { 
        icon: "🧺", 
        name: "Appliance Removal", 
        description: "Refrigerators, washers, dryers, stoves" 
      },
      { 
        icon: "🛋️", 
        name: "Furniture Hauling", 
        description: "Sofas, tables, mattresses, cabinets" 
      },
      { 
        icon: "🗑️", 
        name: "Household Junk", 
        description: "Clutter, unwanted items, garage cleanouts" 
      }
    ],
    construction: [
      { 
        icon: "🏗️", 
        name: "Construction Debris", 
        description: "Wood, drywall, concrete, metals" 
      },
      { 
        icon: "🧱", 
        name: "Concrete Removal", 
        description: "Broken concrete, foundation materials" 
      },
      { 
        icon: "🏠", 
        name: "Roof Removal", 
        description: "Shingles, tiles, old roofing materials" 
      }
    ],
    other: [
      { 
        icon: "🌿", 
        name: "Green Waste", 
        description: "Yard waste, branches, leaves, plants" 
      },
      { 
        icon: "🌱", 
        name: "Dirt Removal", 
        description: "Soil, gravel, landscaping debris" 
      },
      { 
        icon: "🌳", 
        name: "Yard Cleanup", 
        description: "Complete yard debris removal" 
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Simple Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">Our Services</h2>
            <p className="text-gray-600">Whatever you need hauled away, we've got you covered.</p>
          </div>

          {/* Category Selection */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg p-1 bg-gray-100">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-green-600 text-white shadow-md"
                      : "text-gray-600 hover:text-green-600"
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
              {services[activeCategory].map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 } 
                  }}
                  className="group"
                >
                  <div className="flex items-center border-b border-gray-100 pb-6">
                    <div className="bg-green-50 rounded-full p-4 mr-6">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    
                    <div className="hidden md:block">
                      <Button 
                        size="sm" 
                        className="bg-white text-green-600 border border-green-200 hover:bg-green-50 group-hover:bg-green-600 group-hover:text-white transition-colors"
                      >
                        Get Quote
                        <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Mobile Call Button */}
          <div className="md:hidden mt-8 text-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Phone className="h-4 w-4 mr-2" /> Call For Free Estimate
            </Button>
          </div>

          {/* View All Services Link */}
          <div className="mt-12 text-center">
            <a 
              href="/services" 
              className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              View all our services
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;