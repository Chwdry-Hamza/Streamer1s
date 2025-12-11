"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Perks2 = () => {
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


  return (
    <section className="pb-12 sm:pb-28 relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
         <div ref={ref} className="grid grid-cols-12 items-center gap-6 lg:gap-0">
            <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12 lg:text-left text-center order-2 lg:order-1"
          >
            <p className="text-xl sm:text-30 lg:text-40 text-white">
              Step <span className="text-primary">2</span> :
            </p>
            <h2 className="text-xl sm:text-30 lg:text-40 text-primary lg:w-full md:w-70% font-medium">
              Join the live stream
            </h2>
              <p className="text-sm sm:text-18 lg:text-28 text-white">
           Enjoy a real-time gaming experience with the streamer.  
<span className="text-primary">As you watch them play</span>,<br className="hidden sm:block"/> join the excitement of the same game with your own bets.
            </p>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12 order-1 lg:order-2">
            <div className="2xl:-mr-40 mt-4 sm:mt-9 flex justify-center">
              <Image
               src= "/images/Step2.png"
                alt="image"
                width={600}
                height={425}
                className="w-4/5 sm:w-full lg:w-full"
              />
            </div>
          </motion.div>
        </div>

        </div>
      </div>
        {/* <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div> */}
    </section>
  );
};

export default Perks2;
