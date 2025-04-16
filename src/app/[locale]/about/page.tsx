"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Truck, Recycle, Phone, MapPin, ArrowRight, CalendarClock, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function About() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Company history timeline data
  const timelineEvents = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Mario's Hauling was established to provide reliable junk removal services to the Bay Area."
    },
    {
      year: "2017",
      title: "Expanded Services",
      description: "Added construction debris removal and green waste disposal to our service offerings."
    },
    {
      year: "2019",
      title: "Eco-Friendly Focus",
      description: "Implemented sustainable disposal practices, recycling over 60% of collected materials."
    },
    {
      year: "2022",
      title: "Bay Area Expansion",
      description: "Expanded operations to serve the entire Bay Area with 24/7 availability."
    }
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
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Hauling background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white dark:bg-green-700 text-green-800 dark:text-white mb-5 px-3 py-1 text-sm">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Mario's Hauling</h1>
            <p className="text-xl text-green-100">
              San Francisco Bay Area's trusted hauling partner since 2015, providing professional, reliable, and eco-friendly hauling services.
            </p>
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
                <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">Our Mission</h2>
                <p className="text-lg mb-6 dark:text-gray-300">
                  Our mission is to provide top-quality hauling and junk removal services while minimizing environmental impact through responsible disposal and recycling practices.
                </p>
                <div className="space-y-4">
                  {[
                    "Customer satisfaction guaranteed on every job",
                    "Eco-friendly disposal and recycling practices",
                    "Fast response and same-day service availability",
                    "Fully licensed, insured, and professional team"
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

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white dark:bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-400">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              With years of experience and a dedication to excellence, we've built our reputation on reliability, quality service, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
              <div className="bg-green-200 dark:bg-green-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Truck className="h-8 w-8 text-green-700 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-green-800 dark:text-green-400">Fast & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Same-day service available with prompt arrival and efficient completion of all hauling jobs, no matter the size.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
              <div className="bg-green-200 dark:bg-green-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Recycle className="h-8 w-8 text-green-700 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-green-800 dark:text-green-400">Eco-Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Committed to sustainable disposal practices, recycling, and minimizing environmental impact with every job.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
              <div className="bg-green-200 dark:bg-green-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck className="h-8 w-8 text-green-700 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-green-800 dark:text-green-400">Professional Team</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Our experienced team is fully licensed, insured, and trained to handle all types of hauling jobs safely and professionally.
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
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-400">
              Company History
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From our humble beginnings to becoming the Bay Area's trusted hauling service, our journey has been built on quality and commitment.
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
                  className={`relative mb-12 md:mb-24 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 border-4 border-white dark:border-black z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-green-900/40 p-6 rounded-lg shadow-lg">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
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
        className="py-20 bg-white dark:bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">Service Areas</h2>
                <p className="text-lg mb-6 dark:text-gray-300">
                  We proudly serve the entire San Francisco Bay Area, providing prompt and reliable hauling services to both residential and commercial customers.
                </p>
                <div className="space-y-4">
                  {[
                    "San Francisco",
                    "Oakland",
                    "San Jose",
                    "Fremont",
                    "Palo Alto",
                    "And all surrounding Bay Area communities"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-5 w-5 text-green-600 dark:text-green-500 mr-3 flex-shrink-0" />
                      <p className="dark:text-gray-300">{area}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="mr-2 h-4 w-4" /> Call For Service
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
                    <h3 className="font-bold text-xl">Bay Area Coverage</h3>
                    <p>Serving you 24/7</p>
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-400">
              The People Behind Mario's Hauling
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet our dedicated team of professionals committed to providing exceptional hauling services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Mario Rodriguez",
                position: "Founder & Owner",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Elena Martinez",
                position: "Operations Manager",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "David Garcia",
                position: "Lead Hauling Specialist",
                image: "/placeholder.svg?height=400&width=400"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-green-900/40 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-64 relative">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-400">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{member.position}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Clear the Clutter?</h2>
            <p className="text-xl text-green-100 mb-8">
              Contact Mario's Hauling today for fast, reliable, and eco-friendly hauling services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-green-100 text-green-800">
                <Phone className="mr-2 h-5 w-5" /> Call (408) 449-2317
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-green-200 text-white hover:bg-green-600">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}