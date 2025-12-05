"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "We record",
    description: "We capture all the biggest moments relevant to your brand.",
    video: "/images/video1.mp4",
  },
  {
    title: "We edit",
    description: "We create and edit highlight videos. Ready to share in real-time.",
    video: "/images/video2.mp4",
  },
  {
    title: "You share",
    description: "Simply grab your favourite clip and share it across marketing channels.",
    video: "/images/video3.mp4",
  },
];

export default function ClipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Section fully visible hone ka range
      const sectionStart = windowHeight;                    // top of section touches bottom of viewport
      const sectionEnd = -sectionHeight + windowHeight;     // bottom of section touches top of viewport

      const scrollDistance = sectionStart - sectionEnd;     // total scrollable distance for progress 0→1

      let progress = 0;

      if (rect.top <= sectionStart && rect.bottom >= windowHeight) {
        // Section is partially or fully in view
        progress = (sectionStart - rect.top) / scrollDistance;
      } else if (rect.top > sectionStart) {
        progress = 0;   // before section enters
      } else if (rect.bottom < windowHeight) {
        progress = 1;   // after section exits
      }

      // Clamp 0 → 1
      progress = Math.max(0, Math.min(1, progress));

      // Active step (0, 1, 2)
      const newIndex = Math.floor(progress * steps.length);
      setActiveIndex(Math.min(newIndex, steps.length - 1));

      // Show overlay only between ~8% to 92% → smooth fade in/out
      const shouldBeVisible = progress >= 0.08 && progress <= 0.92;
      setIsVisible(shouldBeVisible);
    };

    const rafScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", rafScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", rafScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-950"
      style={{ height: "300vh" }} // 3 steps × 100vh each
    >
      {/* Fixed Overlay - Smooth appear/disappear */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex items-center justify-center py-4 sm:py-0">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8">

              {/* Text Column */}
              <div className="col-span-1 lg:col-span-4 space-y-6 sm:space-y-12 lg:space-y-28 order-2 lg:order-1">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ease-out ${
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : activeIndex > index
                        ? "opacity-40 -translate-x-6"
                        : "opacity-40 translate-x-10"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 sm:w-5 sm:h-5 rounded-full inline-block mb-3 sm:mb-6 transition-all duration-700 ${
                        activeIndex === index
                          ? "bg-cyan-400 shadow-xl shadow-cyan-400/60 scale-125"
                          : "bg-gray-600"
                      }`}
                    />
                    <h3
                      className={`font-black leading-tight transition-all duration-700 ${
                        activeIndex === index
                          ? "text-2xl sm:text-4xl lg:text-6xl text-white"
                          : "text-xl sm:text-2xl lg:text-4xl text-gray-600"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed max-w-sm transition-colors duration-700 ${
                        activeIndex === index ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Video Column */}
              <div className="col-span-1 lg:col-span-8 relative rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-48 sm:h-64 lg:h-auto order-1 lg:order-2">
                {steps.map((step, index) => (
                  <video
                    key={index}
                    src={step.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1200 ease-out ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Live indicator on first step */}
                {activeIndex === 0 && (
                  <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 sm:gap-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-white font-bold text-sm sm:text-lg tracking-wider">
                      LIVE RECORDING
                    </span>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Background blur orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-600/30 rounded-full blur-3xl" />
      </div>
    </section>
  );
}