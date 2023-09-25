import React from "react";

function HeroSection() {
  return (
    <div className="bg-[url('/landing-page/hero-section-bg.png')] bg-cover bg-no-repeat bg-bottom w-full h-full">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-12 px-8">
        <div className="col-span-8 flex flex-col justify-center">
          <div className="pb-6">
            <p className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#F25369] to-[#C375EF] font-bold leading-[5rem]">Empowering Artistry,</p>
            <p className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#F25369] to-[#C375EF] font-bold leading-[5rem]">Simplifying Service.</p>
          </div>
          <p className="text-3xl font-semibold">Explore. Connect. Create.</p>
        </div>
        <div className="col-span-4">
          <img src="/landing-page/hero-illustration.svg" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
