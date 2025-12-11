"use client";

import Link from "next/link";

const Contactus = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-28 relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-muted text-sm sm:text-lg lg:text-2xl mb-4 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 sm:after:w-20 after:h-0.5 after:bg-primary">
            get in  <span className="text-primary">touch</span>?
          </p>

          <h2 className="text-white text-2xl sm:text-4xl lg:text-6xl font-black leading-tight mt-4 sm:mt-6">
            Want to join the <span className="text-primary">crew</span>?
          </h2>

<p className="text-white text-sm sm:text-lg lg:text-2xl font-black leading-tight mt-4 sm:mt-6 px-2 sm:px-0">
            If you want to learn more about becoming a 1XStreamer, we would love to hear from you.
          </p>

          {/* Button */}
          <div className="mt-12 sm:mt-24 lg:mt-40">
            <Link
              href="/contact"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white text-sm sm:text-base font-semibold rounded-full hover:bg-primary/80 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Background blur circle */}
      <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
    </section>
  );
};

export default Contactus;
