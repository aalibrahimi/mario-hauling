"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Phone, Clock, Truck, ArrowRight, MapPin, Star, Recycle, CheckCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import ServicesSection from "@/MyComponents/serviceSection"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const t = useTranslations('HomePage');
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    // add slug at the end and the json name for it as shown in the slug file over yonder
    { name: "Appliance Removal", icon: "🧺" , image:"/placeholder.svg?height=600&width=800", description: "Professional removal of refrigerators, washers, dryers, and other houshold appliances"},
    { name: "Furniture Hauling", icon: "🛋️" , image:"/placeholder.svg?height=600&width=800", description: "Fast and careful removal of sofas, tables, and all types of furniture"},
    { name: "Green Waste", icon: "🌿",  image:"/placeholder.svg?height=600&width=800", description: "Enviromentally friendly disposal of yard waste, branches, leaves, and plant material" },
    { name: "Construction Debris", icon: "🏗️",  image:"/placeholder.svg?height=600&width=800", description: "Efficient cleanup and removal of construction  and renovation debris" },
    { name: "Household Junk", icon: "🗑️",  image:"/placeholder.svg?height=600&width=800", description: "Complete removal of householdd clutter, junk, and unwanted items" },
    { name: "Kitchen & Bath Demo", icon: "🚿" ,  image:"/placeholder.svg?height=600&width=800", description: "Demolition and removal services for kitchen and bathroom renovation projects"},
    { name: "Junk Removal", icon: "📦" ,  image:"/placeholder.svg?height=600&width=800", description: "Comprehensive junk removal servicess for homes and business"},
    { name: "Dirt Removal", icon: "🌱" ,  image:"/placeholder.svg?height=600&width=800", description: "Removal and disposal of dirt, soil, and earth from landscaping or construction projects."},
    { name: "Concrete Removal", icon: "🧱" ,  image:"/placeholder.svg?height=600&width=800", description: "Breaking and hauling away concrete from driveways, patios, and other areas."},
    { name: "Roof Removal", icon: "🏠" ,  image:"/placeholder.svg?height=600&width=800", description: "safe and efficient removal of old roofing materials during placement projects."},
    { name: "Yard Clean Up", icon: "🌳" ,  image:"/placeholder.svg?height=600&width=800", description: "Complete yard cleanup including debris removal and hauling"},
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <main className="flex min-h-screen flex-col bg-white "> 
     {/* hero section here we gooo */}
            {/* Hero Section - Reduced Height */}
            <section className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-800 to-green-700 text-white ">
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
                   className="border-green-400 text-green-800 dark:text-white dark:hover:text-black hover:bg-white hover:text-green-500"
                 >
                   Request Service
                 </Button>
               </motion.div>

               <motion.div
                initial = {{ opacity : 0, y: 20 }}
                animate= {{ opacity : 1, y: 0}}
                transition = {{ duration : 0.8, delay: 0.7 }}
                
               >
                <Badge className="bg"> Free Estimates</Badge>
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
         <section className="py-4 bg-green-800 dark:bg-black text-white overflow-hidden relative">
           <div className="whitespace-nowrap inline-flex animate-marquee">
               {/* mapping out the for loop for x scroll animation "_" parameter is for any, works even without it */}
                 {/* spread operatot to initialize emptry arrays ... */}
                 {/* *Put even numbers for arrays so it does smooth scroll animation loop */}
                 {[...Array(4)].map((_, i) => (
                     <div key={i} className="flex space-x-8">
                        {/* Mapping over the services array to display icons and names */}
                       {/* The "?" makes it so that this only runs if 'services' is defined and is iterable */}
                       {services?.map((service, index) =>(
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

      {/* Services Section */}

  <ServicesSection />
     
    {/* junk removal */}
     {/* Call to Action Banner */}
     <section className="bg-green-700 text-white py-6 flex text-center justify-center">
        <div className="container px-4 md:px-6 max-w-6xl ">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Need junk removed today?</h3>
              <p className="text-green-100">Mario is ready to help 24/7!</p>
            </div>
            <Button size="lg" className="bg-white hover:bg-green-100 text-green-800 ">
              <Phone className="mr-2 h-4 w-4 dark:text-black" /> 
                 <span className="dark:text-black">Call (408) 449-2317
                 </span>
            </Button>
          </div>
        </div>
      </section>
 
 {/* How it works */}
            <section className="py-16 bg-green-50 flex text-center justify-center dark:bg-green-700 ">
              <div className="container px-4 md:px-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once : true}}
                  variants={{fadeInUp}}
                  className="text-center mb-10"
                >
                  <h2 className="text-3xl font-bold mb-3 text-green-800 dark:text-black">How it works</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto dark:text-gray-100">
                    Simple, fast, and hassle-free hauling in just three easy steps. 
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once : true}}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  <motion.div
                  variants={fadeInUp} className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-green-600  "/>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-white ">1. Call Us</h3>
                    <p className="text-slate-600 dark:text-gray-100">Call (408) 449-2317 anytime, day or night. </p>
                  </motion.div>

                  {/* second number */}
                  <motion.div
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="h-8 w-8 text-green-600"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-white ">2. We Arrive</h3>
                    <p className="text-slate-600  dark:text-gray-100">Mario arrives promptly at the scheduledd time ready to haul</p>
                  </motion.div>

                  {/* thirdd number */}
                  <motion.div
                  variants={fadeInUp}
                  className="text-center"
                  >
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="h-8 w-8 text-green-600"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-white">3. We Haul</h3>
                    <p className="text-slate-600 dark:text-gray-100">We Quickly load and haul away your items, leaving your space clean</p>

                  </motion.div>
                </motion.div>
              </div>
            </section>


          {/* Testimonials */}
{/* Testimonials */}
<section className="py-16 bg-white flex text-center justify-center dark:bg-[#000]">
  <div className="container px-4 md:px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-10"
    >
      <h2 className="text-3xl font-bold mb-3 text-green-800 dark:text-green-400">What Our Customers Say</h2>
      <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
        Don't just take our word for it. Here's what our satisfied customers have to say.
      </p>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {[
        {
          quote: "Mario did a fast and efficient job at a very reasonable cost. I had a full load of all types of construction debris. I highly recommend his services!",
          name: "Jeffrey B.",
          location: "San Jose, CA"
        },
        {
          quote: "Communicative, fair pricing, efficient. We filled his truck with junk from our storage section of our shop, same day after seeing his truck in the Home Depot parking lot. Very professional.",
          name: "Arun C.",
          location: "Seattle, WA"
        },
        {
          quote: "Quick response on the phone within minutes. Nice tracking system to keep customers updated live time where the crew is. Prompt phone call. Punctuate and efficient service. Great price!! Highly recommended.",
          name: "Mai T..",
          location: "San Francisco, CA"
        }
      ].map((testimonial, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card className="h-full border-green-400 dark:border-green-800 bg-white dark:bg-gray-900">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="mb-4 dark:text-gray-300">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 mr-3"></div>
                <div>
                  <p className="font-medium text-green-600 dark:text-green-400">{testimonial.name}</p>
                  <p className="text-sm dark:text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
       
      {/* Call to Action */}
      <section className="py-12 bg-green-600 text-white flex text-center justify-center">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-3">Ready to Clear the Clutter?</h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-6">
              Mario is ready to help with all your hauling needs 24/7. One call does it all!
            </p>
            <Button size="lg" className="bg-white hover:bg-green-50 text-green-800">
              <Phone className="mr-2 h-5 w-5" /> Call Now: (408) 449-2317
            </Button>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
