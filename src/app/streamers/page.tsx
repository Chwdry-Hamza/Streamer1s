// app/contact/page.tsx
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import CardSlider from "./../../components/Home/Hero/slider";

export const metadata: Metadata = {
  title: "1XSgtreamers",
  description: "Get in touch with 1XStreamers team",
};

export default function Streamers() {
  const perksData = [
  {
    title: "Earn while doing what you love",
    text: "Receive a competitive monthly salary.",
  },
  {
    title: "Be part of a team",
    text: "Join a crew of talented streamers to learn, support and motivate each other.",
  },
  {
    title: "Stay motivated",
    text: "As part of the crew you will get constant training, feedback and motivation.",
  },
    {
    title: "Work from anywhere",
    text: "Work from the comfort of your home, across the world.",
  },
 {
    title: "Build your personal brand",
    text: "Be seen across hundreds of operator websites and gain followers.",
  },
     {
    title: "Join the revolution",
    text: "Be seen across hundreds of operator websites and gain followers.",
  },

];

  return (
     <section
      className="relative md:pt-20 m py-20 overflow-hidden z-1"
      id="main-banner"
    >
 
    <main className=" pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-muted text-lg sm:text-4xl mb-4">
            Hello  <span className="text-primary">Streamers</span>
          </p>
          <h2 className="text-white text-4xl sm:text-6xl font-black leading-tight mt-6">
            Join the crew and become a <span className="text-primary">1XStreamers</span>!
          </h2>
           <p className="text-muted text-lg sm:text-1 xl mb-4 mt-10 ">
            Earn with us, grow with us and have fun with us
          </p>
            <div className="flex items-center md:justify-center justify-center gap-8">
              <button
                className="bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7"
              >
                <Link
              href="/contact"            >
                Contact Us 💙
                </Link>
              </button>
            </div>
            
        </div>
 

    
      </div>
      <div className="w-full mt-12 px-6">
  <p className="text-white sm:text-28 text-18 mb-4 text-center">
    Trusted by
  </p>

  <div className="max-w-6xl mx-auto">
    <CardSlider />
  </div>
</div>
      {/* FULL WIDTH 3-CARD SECTION */}
<div className="w-full mt-36 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-muted text-lg sm:text-4xl mb-4 ">
        <span className="text-primary">Benefits</span>
      </p>
      <h2 className="text-white text-3xl sm:text-6xl font-black mt-6 sm:whitespace-nowrap">
        Why stream with <span className="text-primary">1XStreamers</span>?
      </h2>
      <p className="text-muted text-lg sm:text-xl mb-4 mt-4 ">
        Become part of the Livespins crew and join the creator revolution.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-4">
      {perksData.map((item, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 flex flex-col justify-between min-h-80"
        >
          <h3 className="text-primary text-5xl sm:text-5xl font-black mb-8">
            {item.title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed flex-1">
            {item.text}
          </p>
       
        </div>
      ))}
    </div>
     
  </div>
</div>

<div className="w-full mt-36 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-muted text-lg sm:text-4xl mb-4">
                <span className="text-primary">Watch</span> our streamers in action
              </p>
              <h2 className="text-white text-3xl sm:text-6xl font-black mt-6 sm:whitespace-nowrap">
                See the <span className="text-primary">1XStreamers</span> Experience
              </h2>
              <p className="text-muted text-lg sm:text-xl mb-4 mt-4 max-w-3xl mx-auto">
                Watch how our streamers create engaging content and connect with audiences worldwide.
              </p>
            </div>

            <div className="relative w-full aspect-video max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                muted
                preload="metadata"
              >
                <source src="/images/Streamervideo1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-primary hover:bg-primary/90 text-black   rounded-lg font-semibold py-4 px-8 transition-all duration-300 transform hover:scale-105">
                  <Link href="/contact">
                    Start Streaming Today 💙
                  </Link>
                </button>
                <button className="bg-transparent border-2 border-primary hover:bg-primary/10 text-primary rounded-lg font-semibold py-4 px-8 transition-all duration-300">
                  Watch More Videos
                </button>
              </div>
            </div>
          </div>
        </div>

      <div className="text-center mb-16 mt-44">
          <p className="text-muted text-lg sm:text-4xl mb-4">
          <span className="text-primary">GET IN TOUCH</span>
          </p>
          <h2 className="text-white text-4xl sm:text-6xl font-black leading-tight mt-6">
            WANT TO JOIN THE CREW?
          </h2>
           <p className="text-muted text-lg sm:text-1 xl mb-4 mt-10 ">
           If you want to learn more about becoming a Streamer, we would love to hear from you.
          </p>
            <div className="flex items-center md:justify-center justify-center gap-8">
              <button
                className="bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7"
              >
                <Link
              href="/contact">
                Contact Us
                </Link>
              </button>
            </div>

        </div>
    </main>
     
    </section>
  );
}