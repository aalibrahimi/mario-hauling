"use client"
import { Button } from '@/components/ui/button';
import { Check, CheckCircle, Phone, Recycle } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('HomePage');
const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const services = [ 
    { name: "Appliance Revomal", icon: "🧺"},
    { name: "Furniture Hauling", icon: "🛋️"},
    { name: "Green Waste", icon: "🌿"},
    { name: "Construction Debris", icon: "🏗️"},
    { name: "Household & Junk", icon: "🗑️"},
    { name: "Kitchen & Bath Demo", icon: "📦"},
    { name: "Junk Removal", icon: "🌱"},
    { name: "Concrete Removal", icon: "🧱" },
    { name: "Roof Removal", icon: "🏠" },
    { name: "Yard Clean Up", icon: "🌳" },
  ]

  const fadeInUp = {
    hidden : { opacity : 0, y: 20},
    visible : { opacity : 1, y: 0, transition : { duration: 0.6 }},
  }

  const staggerContainer = {
    hidden : { opacity : 0 },
    visible : {
      opacity : 1,
      transition : {
        staggerChildren : 0.1,
      },
    },
  }
  
  return (
   <main className="flex min-h-screen flex-col">
    {/* Header im gonna put it for now*/}
    <header className="bg-white border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-center">
          <Recycle className='h-6 w-6 text-green-600 mr-2' />
          <span className="font-bold text-green-800 text-lg">Mario's Hauling</span>
        </div>
        <div className="flex items-center">
          <a href="tel: (408) 449-2317 " className="flex items-center text-green-700 font-medium hover:text-green-500 transition-colors" >
            <Phone className='h-4 w-4 mr-1'/>
            <span className="hidden sm:inline">(408) 449-2317</span>
          </a>
          <Button size='sm' className='ml-4 bg-green-600 hover:bg-greeen-700 text-white' >
          Get a Quote
          </Button>
        </div>
      </div>
    </header>

    {/* hero section here we gooo */}
           {/* Hero Section - Reduced Height */}
           <section className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Hauling background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-white text-green-800 font-bold px-3 py-1 rounded-full text-sm w-fit"
              >
                Available 24/7
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              >
                Professional Hauling & Junk Removal Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-green-100"
              >
                Appliances, furniture, construction debris, and more. Fast, reliable, and affordable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button size="lg" className="bg-white hover:bg-green-100 text-green-800">
                  <Phone className="mr-2 h-4 w-4" /> Call Now: (408) 449-2317
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800"
                >
                  Request Service
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/20 hidden md:block"
            >
              {/* hehe looks like a glass card, but really its just very light shade of green (little fun trick for ya blazey) */}
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                Why Choose Mario's Hauling
              </h3>
              {/* now to make a ul list within this "glass-card" 😉*/} 
              <ul className="spacey-y-2">
                {[
                  "available 24.7 for emergency service",
                  "Fast response and same day service",
                  "Affordable rates with no hidden fees",
                  "Eco-friendly disposal practices",
                  "Fully licensed and insured",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className='h-4 w-4 mr-2 text-green mt-1 flex-shrink-0' />
                    <span>{item}</span>
                  </li>
                ) ) }
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Finally time to cook  */}
        <section className="py-4 bg-green-800 text-white overflow-hidden relative">
          <div className="whitespace-nowrap inline-flex animate-margquee">

                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex space-x-8">
                      {services.map((service, index) =>(
                         <div key={index} className="flex items-center space-x-2 mx-4">
                            <span className="text-2xl">{service.icon}</span>    
                            <span className="text-lg font-semi-bold">{service.name}</span>
                            <span className="text-green-300 mx-4">•</span>
                        </div>
                      ))}
                    </div>
                ))}
          </div>
        </section>
      </main>
       
  );
}
