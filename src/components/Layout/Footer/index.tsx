import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-10 sm:pt-16 bg-darkmode relative z-[999]">

      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-2 sm:grid-cols-12 lg:gap-20 md:gap-6 gap-6 pb-10 sm:pb-16">
          <div className="lg:col-span-4 md:col-span-6 col-span-2 text-center sm:text-left">
            <Logo />
            <div className="flex gap-4 sm:gap-6 items-center mt-6 sm:mt-8 justify-center sm:justify-start">
              <Link href="https://www.facebook.com/" className="group">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="20"
                  height="20"
                  className="text-white group-hover:text-primary sm:w-6 sm:h-6"
                />
              </Link>
              <Link href="https://www.instagram.com/" className="group">
                <Icon
                  icon="fa6-brands:instagram"
                  width="20"
                  height="20"
                  className="text-white group-hover:text-primary sm:w-6 sm:h-6"
                />
              </Link>

               <Link href="https://www.youtube.com/" className="group">
                <Icon
                  icon="fa6-brands:youtube"
                  width="20"
                  height="20"
                  className="text-white group-hover:text-primary sm:w-6 sm:h-6"
                />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-1">
            <h4 className="text-white mb-3 sm:mb-4 font-medium text-base sm:text-lg lg:text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-2 sm:pb-4">
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary text-sm sm:text-base lg:text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 md:col-span-4 col-span-1">
            <h3 className="text-white text-base sm:text-lg lg:text-24 font-medium">Subscribe</h3>
            <p className="text-muted text-opacity-60 text-sm sm:text-base lg:text-18 mt-3 sm:mt-5">
              Subscribe to get the latest
              <br /> news form us
            </p>
            <div className="relative lg:w-80%">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter Email"
                className="bg-transparent border border-dark_border border-opacity-60 py-3 sm:py-4 text-white text-sm sm:text-base rounded-lg w-full mt-4 sm:mt-6 px-4 sm:px-6"
              />
              <Icon
                icon="tabler:send"
                width="20"
                height="20"
                className="text-primary absolute right-4 sm:right-7 bottom-3 sm:bottom-4 sm:w-6 sm:h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
