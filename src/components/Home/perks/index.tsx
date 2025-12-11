"use client";
import { perksData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Perks = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const services = [
  {
      icon: "/images/icons/icon-consulting.svg",
      text: "Boost Your Reach",
    },
    {
      icon: "/images/icons/icon-blockchain.svg",
      text: "Increase Your Earnings",
    },
    {
      icon: "/images/icons/icon-Services.svg",
      text: "Grow Your Fanbase",
    },
  ];


  return (
    <section className="pb-12 sm:pb-28 pt-12 sm:pt-28 relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
          <p className="text-muted text-sm sm:text-18 lg:text-28 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2">
            Here's how it  <span className="text-primary">works</span>
          </p>
          <h2 className="text-white text-xl sm:text-30 lg:text-40 font-medium">
           Three easy steps for the <span className="text-primary">player</span>
          </h2>
          {/* <div className="mt-16 border border-border grid lg:grid-cols-3 sm:grid-cols-2 border-opacity-20 py-16 gap-10 px-20 rounded-3xl sm:bg-perk bg-dark_grey bg-opacity-35 lg:bg-bottom bg-center bg-no-repeat">
            {perksData.map((item, index) => (
              <div
                key={index}
                className="text-center flex items-center justify-end flex-col"
              >
                <div className="bg-primary bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                  <Image
                    src= {`${getImagePrefix()}${item.icon}`}
                    alt={item.title}
                    width={44}
                    height={44}
                  />
                </div>
                <h4 className={`text-white text-28 mb-4 ${item.space}`}>
                  {item.title}
                </h4>
                <div
                  className="text-muted text-opacity-60"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div> */}
           <section className="md:pt-18" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center gap-6 lg:gap-0">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12 lg:text-left text-center order-2 lg:order-1"
          >
            <p className="text-xl sm:text-30 lg:text-40 text-white">
              Step <span className="text-primary">1</span> :
            </p>
            <h2 className="text-xl sm:text-30 lg:text-40 text-primary lg:w-full md:w-70% font-medium">
              Discover Your Favorite Streamer Explore the streamer lobby. 
            </h2>
              <p className="text-sm sm:text-18 lg:text-28 text-white">
              See who is currently live, pick the one that matches your mood,   <span className="text-primary">and join immediately.</span>.
            </p>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12 order-1 lg:order-2">
            <div className="2xl:-mr-40 mt-4 sm:mt-9 flex justify-center">
              <Image
               src= "/images/Step1.png"
                alt="image"
                width={600}
                height={425}
                className="w-4/5 sm:w-full lg:w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
        {/* <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div> */}

    </section>

        </div>
      </div>
    </section>
  );
};

export default Perks;
