import React from "react";

function DetailsSection() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 mt-12">
      <p className="text-xl lg:text-2xl xl:text-3xl font-semibold text-center">Get The Inside Scoop Of</p>
      <div className="flex items-center justify-center my-4">
        <button className="bg-gradient-to-r from-[#F25369] to-[#C375EF] text-white px-8 rounded-lg py-2">What We Do?</button>
      </div>
      <div className="relative flex items-center justify-center mt-8">
        <img src="/landing-page/thumbnail.png" className="relative z-10" />
        <img src="/landing-page/circle-1.png" className="absolute 2xl:-top-80 2xl:-left-40 hidden md:block" />
        <img src="/landing-page/circle-2.png" className="absolute 2xl:-bottom-80 2xl:-right-40 hidden md:block" />
      </div>
    </div>
  );
}

export default DetailsSection;
