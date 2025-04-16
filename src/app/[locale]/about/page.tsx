"use client"
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

export default function About() {

  // same animation as knozorion here wwe go
  const fadeInLeft = {
    hidden : { opacity : 0, x: -50},
    visible : { opacity :  1, x: 0, transition: {duration : 0.6 }},

  };
  const fadeInRight = {
    hidden : { opacity: 0, x : 50},
    visible : { opacity : 1, x: 0, transition: {duration : 0.6} },
  };

  const fadeInUp = {
    hidden : { opacity: 0, y: 20},
    visible : { opacity : 1, y: 0, transition : {duration : 0.6 }}
  };



  return (
    <div className="bg-white h-full w-full">
      {/* Header */}
 <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-black dark:text-white bg-green-500 dark:bg-green-800 py-16 w-full"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mario's Hauling</h1>
            <div className="text-xl italic">
              <p>Driven by our burning passion and dedication to excellence, our mission is to go</p>
              <p>above and beyond to deliver the highest quality service possible,</p>
              <p>ensuring every client is satisfied and every project is handled with</p>
              <p>care, professionalism, and efficiency.</p>
            </div>
          </div>
        </div>
      </motion.section>



      <br />

   
      {/* Images Display */}
      <section className="flex flex-col text-black px-10 gap-10">
        {/* Hauling */}
        <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInRight}
        className=""

      >
        <div className="bg-green-500/10 flex items-center justify-center gap-10 p-5 rounded-2xl">
          <Image
            src="/image4.jpg"
            alt="Image4"
            width={500}
            height={500}
            className="w-75 h-auto rounded-sm"
          />
          <div className="flex flex-col w-100 h-full items-center gap-5">
            <span className="text-4xl font-semibold">Hauling Appliances</span>
            <span className="text-xl">
              We safely remove and haul away old or unwanted appliances,
              including refrigerators, washers, dryers, ovens, and more—making
              disposal easy and stress-free
            </span>
          </div>
        </div>

      </motion.section>


        {/* Furniture */}

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInLeft}
        className=""
      >

        <div className="bg-green-500/10 flex items-center justify-center gap-10 p-5 rounded-2xl">
          <div className="flex flex-col w-100 h-full items-center gap-5">
            <span className="text-4xl font-semibold">Furniture</span>
            <span className="text-xl">We provide quick and efficient furniture removal services, hauling away old sofas, mattresses, dressers, tables, and more. Whether you're upgrading or clearing out space, we make furniture disposal easy and hassle-free.</span>
          </div>
          <Image
            src="/image5.jpg"
            alt="Image5"
            width={500}
            height={500}
            className="w-75 h-auto rounded-sm"
          />
        </div>
      </motion.section>


      <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInRight}
      className=""
      >

        {/* Green Waste */}
        <div className="bg-green-500/10 flex items-center justify-center gap-10 p-5 rounded-2xl">
          <Image
            src="/yelp-logo.png"
            alt="Image6"
            width={500}
            height={500}
            className="w-75 h-auto rounded-sm"
          />
          <div className="flex flex-col w-100 h-full items-center gap-5">
            <span className="text-4xl font-semibold">Green Waste</span>
            <span className="text-xl">Our green waste removal service helps you get rid of yard debris like grass clippings, branches, leaves, shrubs, and other organic materials. We ensure fast pickup and eco-friendly disposal to keep your outdoor space clean and clear.</span>
          </div>
        </div>

      </motion.section>

{/* construction debreeezy */}
    <motion.section
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
    className=""
    >

        <div className="bg-green-500/10 flex items-center justify-center gap-10 p-5 rounded-2xl">
          <div className="flex flex-col w-100 h-full items-center gap-5">
            <span className="text-4xl font-semibold">Construction Debris & Household Junk</span>
            <span className="text-xl">We offer professional removal of construction debris and household junk, including drywall, wood, tile, old furniture, electronics, and general clutter. </span>
          </div>
          <Image
            src="/yelp-logo.png"
            alt="Yelp Logo"
            width={500}
            height={500}
            className="w-75 h-auto rounded-sm"
          />
        </div>
    </motion.section>

{/* kitchen and bathroom Demolitions */}
<motion.section
  initial = "hidden"
  animate = "visible"
  variants = {fadeInRight}
  className=""
>

        <div className="bg-green-500/10 flex items-center justify-center gap-10 p-5 rounded-2xl">
          <Image
            src="/yelp-logo.png"
            alt="Yelp Logo"
            width={500}
            height={500}
            className="w-75 h-auto rounded-sm"
          />
          <div className="flex flex-col w-100 h-full items-center gap-5">
            <span className="text-4xl font-semibold">Kitchen & Bathroom Demolition</span>
            <span className="text-xl">We provide safe and efficient kitchen and bathroom demolition services, removing cabinets, countertops, sinks, tubs, tiles, and more.</span>
          </div>
        </div>

</motion.section>

{/* fency teardowns */}
<motion.section
  initial = "hidden"
  animate = "visible"
  variants={fadeInLeft}

>

        <div className="bg-green-500/10 flex items-center justify-center gap-10 p-5 rounded-2xl">
          <div className="flex flex-col w-100 h-full items-center gap-5">
            <span className="text-4xl font-semibold">Fence Teardowns</span>
            <span className="text-xl">Our fence teardown service includes the quick and safe removal of old or damaged fences, whether wood, vinyl, or chain link. We handle the heavy lifting and cleanup, making room for your next upgrade or open space.</span>
          </div>
          <Image
            src="/yelp-logo.png"
            alt="Yelp Logo"
            width={500}
            height={500}
            className="w-75 h-auto rounded-sm"
          />
        </div>
</motion.section>

{/* handyman */}
<motion.section
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>

        <div className="bg-green-500/10 flex items-center justify-center gap-10 p-5 rounded-2xl">
          <Image
            src="/yelp-logo.png"
            alt="Yelp Logo"
            width={500}
            height={500}
            className="w-75 h-auto rounded-sm"
          />
          <div className="flex flex-col w-100 h-full items-center gap-5">
            <span className="text-4xl font-semibold">Handyman Work & Full-scale Demolition Services</span>
            <span className="text-xl">From small repairs to full-scale demolition, our handyman and demolition services cover it all. Whether it's patching drywall, fixing fixtures, or tearing down entire structures, we deliver reliable, efficient solutions for any project size.</span>
          </div>
        </div>
</motion.section>
      </section>
    </div>
  );
}
