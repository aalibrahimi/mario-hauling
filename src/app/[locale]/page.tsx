"use client"
import { Button } from '@/components/ui/button';
import { Phone, Recycle } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('HomePage');
// const [servicesRef, servicesInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })
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
   <div className="flex min-h-screen flex-col">
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
    <section className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-800 to-green-700 text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
         src="/codewithali.png?height=800&width=1920"
        alt = "Hauling background"
        fill
        className='object-cover'
        priority
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid md:gridd-cols-2 gap:8 items-center">
            <div className="flex flex-col space-y-4">
              <motion.div
                 initial = {{ scale: 0.8, opacity: 0}}
                 animate = {{ scale: 1, opacity: 1 }}
                 transition = {{ duration: 0.5 }}
                 className="inline-block bg-white text-green-800 font-bold px-3 py-1 rounded-full text-sm w-fit"
              >
                Avialable 24/7
              </motion.div>

              <motion.h1 
              initial= {{ opacity: 0, y: 20}}
              animate = {{ scale: 1, opacity: 1}}
              transition = {{ duration: 0.5}}
              className='inline-block bg-white text-green-800 font-bold px-3 py-1 rounded-full text-sm w-fit'
              > 
              Professional Hualing & Junk Removal Services
              </motion.h1>

              <motion.p
                initial = {{ opacity: 0, y: 20 }}
                animate = {{ opacity: 1, y: 20 }}
                transition = {{ duration: 0.8, delay: 0.4 }}
                className='text-green-100'
              >
                  Appliances, furniture, construction debris, and more, Fast, reliable, and affordable.
              </motion.p>

              <motion.div
              initial = {{ opacity: 0, y: 20}}
              animate= {{ opacity: 1, y: 0}}
              transition = {{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-3'
              >
                <Button>
                  <Phone className='mr-2 h-4 w-4' />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
}
