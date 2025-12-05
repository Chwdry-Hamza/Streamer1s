"use client";

const perksData = [
  {
    title: "Game Studios",
    text: "Stand out from the crowd and boost your exposure as our streamers play your games and talk players through its features.",
  },
  {
    title: "Operators",
    text: "Whether looking to boost player acquisition or player engagement, Livespins can help. Onboard your own brand ambassadors or let Livespins give you a plug and play streaming strategy using our influencers.",
  },
  {
    title: "Streamers",
    text: "Join the crew and become a Livespins streamer or collaborate with us to boost your own channel.",
  },
];

const Support = () => {
  return (
   <section className="py-12 sm:py-20 lg:py-28 relative pb-[30vh] sm:pb-[40vh] lg:pb-[60vh]">

      <div className="container mx-auto lg:max-w-screen-xl px-4">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-muted text-sm sm:text-lg lg:text-2xl mb-4 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 sm:after:w-20 after:h-0.5 after:bg-primary">
            Who can benefit from <span className="text-primary">1XStreamers</span>?
          </p>
          <h2 className="text-white text-2xl sm:text-4xl lg:text-6xl font-black leading-tight mt-4 sm:mt-6">
            The whole igaming <span className="text-primary">ecosystem</span>
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {perksData.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-60 sm:min-h-72 lg:min-h-80"
            >
              {/* Title */}
              <h3 className="text-primary text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed flex-1">
                {item.text}
              </p>

              {/* Learn More Button */}
              <div className="mt-6 sm:mt-8 lg:mt-12 flex items-center gap-2 sm:gap-3 text-white hover:text-primary transition-colors cursor-pointer group">
                <span className="text-sm sm:text-base lg:text-lg font-medium">Learn more</span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-primary transition-colors">
                  <span className="text-base sm:text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background blur circle (optional - matches your design) */}
        {/* <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div> */}
    </section>
  );
};

export default Support;