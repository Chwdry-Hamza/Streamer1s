"use client";

import Image from "next/image";

const CardSlider = () => {
  const companyLogos = [
    { src: "/images/Gamdom.png", width: 180, height: 80, url: "https://gamdom.com/" },
    { src: "/images/Stake.png", width: 180, height: 80, url: "https://stake.com/" },
  ];

  return (
    <div className="mt-10">
      <div className="flex justify-center items-center gap-12 sm:gap-16 md:gap-20">
        {companyLogos.map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center h-28 border border-gray-700 rounded-lg px-8 py-4 hover:border-gray-500 transition-colors cursor-pointer"
          >
            <Image
              src={logo.src}
              alt="company-logo"
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
