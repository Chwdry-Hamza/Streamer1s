"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import TvSharpIcon from '@mui/icons-material/TvSharp';
const Hero = () => {

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative pt-24 pb-12 sm:pt-32 md:pt-40 md:pb-28 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
            <div className="flex gap-4 sm:gap-6 items-center lg:justify-start justify-center mb-4 sm:mb-5 mt-8 sm:mt-16 lg:mt-24">
            <TvSharpIcon style={{ width: "32", height: "32" , color : "white"}} className="sm:w-10 sm:h-10" />
              <p className="text-white text-base sm:text-18 lg:text-28 mb-0">
                Stream. Earn. <span className="text-primary">Go</span>
              </p>
            </div>
            <h1 className="font-medium text-3xl sm:text-4xl md:text-54 lg:text-70 xl:text-76 lg:text-start text-center text-white mb-6 sm:mb-10">
              Bet with <span className="text-primary">Streamers ⚡</span> of your{" "}
              <span className="text-primary">choice</span>!
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <button
                className="bg-transparent border border-primary rounded-lg text-base sm:text-lg lg:text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-5 sm:px-7"
              >
                <Link
              href="/contact"            >
                Contact Us
                </Link>
              </button>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="col-span-7 lg:block hidden"
          >
            <div className="ml-20 -mr-64">
              <Image
                src= "/images/Streamers.png"
                alt="Banner"
                width={1150}
                height={1150}
              />
            </div>
          </motion.div>
        </div>
        <p className="text-white text-base sm:text-18 lg:text-28 mb-0 text-center mt-8 sm:mt-0">
  Trusted by
</p>

        <CardSlider />
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default Hero;
