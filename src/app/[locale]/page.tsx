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

  // const t = useTranslations('HomePage');

  const services = [
    // add slug at the end and the json name for it as shown in the slug file over yonder
    { name: t('allServices.applianceRemoval.name'), icon: "🧺", image: "/placeholder.svg?height=600&width=800", description: t('allServices.applianceRemoval.description'), slug: "appliance-removal" },
    { name: t('allServices.furnitureHauling.name'), icon: "🛋️", image: "/placeholder.svg?height=600&width=800", description: t('allServices.furnitureHauling.description'), slug: "furniture-hauling" },
    { name: t('allServices.greenWaste.name'), icon: "🌿", image: "/placeholder.svg?height=600&width=800", description: t('allServices.greenWaste.description'), slug: "green-waste" },
    { name: t('allServices.constructionDebris.name'), icon: "🏗️", image: "/placeholder.svg?height=600&width=800", description: t('allServices.constructionDebris.description'), slug: "construction-debris" },
    { name: t('allServices.householdJunk.name'), icon: "🗑️", image: "/placeholder.svg?height=600&width=800", description: t('allServices.householdJunk.description'), slug: "household-junk" },
    { name: t('allServices.kitchenBathDemo.name'), icon: "🚿", image: "/placeholder.svg?height=600&width=800", description: t('allServices.kitchenBathDemo.description'), slug: "kitchen-bath-demo" },
    { name: t('allServices.junkRemoval.name'), icon: "📦", image: "/placeholder.svg?height=600&width=800", description: t('allServices.junkRemoval.description'), slug: "junk-removal" },
    { name: t('allServices.dirtRemoval.name'), icon: "🌱", image: "/placeholder.svg?height=600&width=800", description: t('allServices.dirtRemoval.description'), slug: "dirt-removal" },
    { name: t('allServices.concreteRemoval.name'), icon: "🧱", image: "/placeholder.svg?height=600&width=800", description: t('allServices.concreteRemoval.description'), slug: "concrete-removal" },
    { name: t('allServices.roofRemoval.name'), icon: "🏠", image: "/placeholder.svg?height=600&width=800", description: t('allServices.roofRemoval.description'), slug: "roof-removal" },
    { name: t('allServices.yardCleanup.name'), icon: "🌳", image: "/placeholder.svg?height=600&width=800", description: t('allServices.yardCleanup.description'), slug: "yard-cleanup" }
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
            <section className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-800 to-green-700 dark:from-green-900 dark:to-green-950 text-white">
         <div className="container relative z-10 px-4 md:px-6">
           <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="flex flex-col space-y-4">
               <motion.div
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.5 }}
                 className="inline-block bg-white dark:bg-green-800 text-green-800 dark:text-white font-bold px-3 py-1 rounded-full text-sm w-fit"
               >
                 {t('hero.badge')}
               </motion.div>
 
               <motion.h1
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
               >
                 {t('hero.headline')}
               </motion.h1>
 
               <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="text-green-100"
               >
                 {t('hero.description')}
               </motion.p>
 
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 className="flex flex-col sm:flex-row gap-3"
               >
                 <Button size="lg" className="bg-white hover:bg-green-100 text-green-800 dark:bg-green-700 dark:hover:bg-green-800 dark:text-white">
                   <Phone className="mr-2 h-4 w-4" /> 
                   <span className="text-black">{t('hero.callButton')}</span>
                 </Button>
                 <Button
                   size="lg"
                   variant="outline"
                   className="border-green-400 text-black hover:bg-white hover:text-green-500 dark:border-green-600 dark:text-white dark:hover:bg-green-800"
                 >
                   {t('hero.requestButton')}
                 </Button>

                {/* yelpy */}
                <Link 
                  href="https://www.yelp.com/biz/marios-hauling-santa-clara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex items-center justify-center  border-red-400 hover:bg-red-500 dark:border-red-600 dark:hover:bg-red-500"
                  >
                    <Image 
                      src="/yelp-logo.png" 
                      alt="Yelp" 
                      width={24} 
                      height={24} 
                      className="mr-2" 
                    />
                    <span className="text-black dark:text-white">{t('hero.yelpButton')}</span>
                  </Button>
                </Link>

               </motion.div>

               <motion.div
                initial = {{ opacity : 0, y: 20 }}
                animate= {{ opacity : 1, y: 0}}
                transition = {{ duration : 0.8, delay: 0.7 }}
               >
                <Badge className="bg-green-600 dark:bg-green-700 text-white">{t('hero.freeEstimates')}</Badge>
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
                 {t('features.title')}
               </h3>
               {/* now to make a ul list within this "glass-card" 😉*/} 
               <ul className="spacey-y-2">
                 {[
                   t('features.items.available'),
                   t('features.items.fastResponse'),
                   t('features.items.affordable'),
                   t('features.items.ecoFriendly'),
                   t('features.items.licensed'),
                 ].map((item, i) => (
                   <li key={i} className="flex items-start">
                     <CheckCircle className='h-4 w-4 mr-2 text-green mt-1 flex-shrink-0' />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </motion.div>
           </div>
         </div>
       </section>
 
         {/* Finally time to cook  */}
         <section className="py-4 bg-green-900 dark:bg-green-700 text-white overflow-hidden relative">
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
     <section className="bg-green-900 dark:bg-green-700 text-white py-6 flex text-center justify-center">
        <div className="container px-4 md:px-6 max-w-6xl ">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">{t('junkBanner.title')}</h3>
              <p className="text-green-100">{t('junkBanner.description')}</p>
            </div>
            <Button size="lg" className="bg-white hover:bg-green-100 text-green-800 ">
              <Phone className="mr-2 h-4 w-4 dark:text-black" /> 
                 <span className="dark:text-black">{t('junkBanner.callButton')}
                 </span>
            </Button>
          </div>
        </div>
      </section>
 
 {/* How it works */}
            <section className="py-16 bg-green-200 flex text-center justify-center dark:bg-green-800 ">
              <div className="container px-4 md:px-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once : true}}
                  variants={{fadeInUp}}
                  className="text-center mb-10"
                >
                  <h2 className="text-3xl font-bold mb-3 text-green-800 dark:text-black">{t('howItWorks.title')}</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto dark:text-gray-100">
                    {t('howItWorks.description')}
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
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-green-600  "/>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-white ">{t('howItWorks.steps.call.title')}</h3>
                    <p className="text-slate-600 dark:text-gray-100">{t('howItWorks.steps.call.description')}</p>
                  </motion.div>

                  {/* second number */}
                  <motion.div
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="h-8 w-8 text-green-600"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-white ">{t('howItWorks.steps.arrive.title')}</h3>
                    <p className="text-slate-600  dark:text-gray-100">{t('howItWorks.steps.arrive.description')}</p>
                  </motion.div>

                  {/* thirdd number */}
                  <motion.div
                  variants={fadeInUp}
                  className="text-center"
                  >
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="h-8 w-8 text-green-600"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-white">{t('howItWorks.steps.haul.title')}</h3>
                    <p className="text-slate-600 dark:text-gray-100">{t('howItWorks.steps.haul.description')}</p>

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
      <h2 className="text-3xl font-bold mb-3 text-green-800 dark:text-green-400">{t('testimonials.title')}</h2>
      <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
        {t('testimonials.description')}
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
          quote: t('testimonials.items.jeffrey.quote'),
          name: t('testimonials.items.jeffrey.name'),
          location: t('testimonials.items.jeffrey.location')
        },
        {
          quote: t('testimonials.items.arun.quote'),
          name: t('testimonials.items.arun.name'),
          location: t('testimonials.items.arun.location')
        },
        {
          quote: t('testimonials.items.mai.quote'),
          name: t('testimonials.items.mai.name'),
          location: t('testimonials.items.mai.location')
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
                <div className="flex flex-col items-start">
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
      <section className="py-12 bg-green-700 dark:bg-green-800 text-white flex text-center justify-center">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-3">{t('cta.title')}</h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-6">
              {t('cta.description')}
            </p>
            <Button size="lg" className="bg-white hover:bg-green-50 text-green-800">
              <Phone className="mr-2 h-5 w-5" /> {t('cta.callButton')}
            </Button>
          </motion.div>
        </div>
      </section>

    </main>
  )
}