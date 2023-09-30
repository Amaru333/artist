import React from "react";

function HeroSection() {
  return (
    <div className="bg-[url('/landing-page/hero-section-bg.png')] bg-cover bg-no-repeat bg-bottom w-full h-full pb-20">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-12 px-8">
        <div className="col-span-12 sm:col-span-8 flex flex-col justify-center order-2 sm:order-1">
          <div className="pb-6">
            <p className="text-transparent text-3xl lg:text-5xl xl:text-7xl bg-clip-text bg-gradient-to-r from-[#F25369] to-[#C375EF] font-bold xl:leading-[5rem]">Empowering Artistry,</p>
            <p className="text-transparent text-3xl lg:text-5xl xl:text-7xl bg-clip-text bg-gradient-to-r from-[#F25369] to-[#C375EF] font-bold xl:leading-[5rem]">Simplifying Service.</p>
          </div>
          <p className="text-xl lg:text-2xl xl:text-3xl font-semibold">Explore. Connect. Create.</p>
        </div>
        <div className="col-span-12 sm:col-span-4 order-1 sm:order-2">
          <img src="/landing-page/hero-illustration.svg" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
