"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CardSlider = () => {
  const companyLogos = [
    { src: "/images/relax1.png", width: 200, height: 80 },
    { src: "/images/everymatrix2.png", width: 200, height: 80 },
    { src: "/images/evolution3.png", width: 200, height: 80 },
    { src: "/images/yggdrasil4.png", width: 200, height: 80 },
    { src: "/images/softswiss5.png", width: 200, height: 80 },
  ];

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="mt-10">
      <Slider {...settings}>
        {companyLogos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-4 h-28"
          >
            <Image
              src={logo.src}
              alt="company-logo"
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
