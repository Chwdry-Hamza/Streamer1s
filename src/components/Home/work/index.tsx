"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";
import AreaChartSharpIcon from '@mui/icons-material/AreaChartSharp';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';
import ExpandSharpIcon from '@mui/icons-material/ExpandSharp';
const Work = () => {
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
    iconType: "mui",
    icon: AreaChartSharpIcon,
    text: "Boost Your Reach",
  },
  {
    iconType: "mui",
    icon: LightbulbSharpIcon,
    text: "Increase Your Earnings",
  },
  {
    iconType: "mui",
    icon: ExpandSharpIcon,
    text: "Grow Your Fanbase",
  },
];


  return (
    <section className="pt-12 sm:pt-20 md:pt-28" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center gap-6 lg:gap-0">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12 text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-base sm:text-18 lg:text-28 text-white">
              Work with <span className="text-primary">us</span>
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-40 text-white lg:w-full md:w-70% font-medium">
              Partner with us and take your streaming journey to the next level — more reach, more engagement, more rewards.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 mt-6 sm:mt-11">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-5 justify-center lg:justify-start">
                <div className="px-3 py-3 sm:px-5 sm:py-5 bg-light_grey bg-opacity-30 rounded-full">
  {service.iconType === "image" ? (
    <Image
      src={`${getImagePrefix()}${service.icon}`}
      alt={`${service.text} icon`}
      width={40}
      height={40}
      className="w-8 h-8 sm:w-10 sm:h-10"
    />
  ) : (
    <service.icon sx={{ fontSize: 32, color: "white" }} className="sm:text-[40px]" />
  )}
</div>

                  <p className="text-base sm:text-lg lg:text-24 text-muted">{service.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12 order-1 lg:order-2">
            <div className="2xl:-mr-40 mt-4 sm:mt-9 flex justify-center">
              <Image
               src= "/images/Streamers2.png"
                alt="image"
                width={600}
                height={425}
                className="w-4/5 sm:w-full lg:w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
