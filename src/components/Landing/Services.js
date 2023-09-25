import React from "react";

function Services() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 mt-20">
      <p className="text-3xl font-semibold text-center">What are you looking for?</p>
      <div className="flex items-center justify-center">
        <div className="border rounded-full border-[#F25369] mt-6">
          <button className="bg-gradient-to-r from-[#F25369] to-[#C375EF] text-white px-4 py-2 rounded-full">I Am An Artist</button>
          <button className="text-[#F25369] px-4 py-2 rounded-full">I Am A Client</button>
        </div>
      </div>
      <div className="flex items-start mt-8">
        <img className="h-60" src="/landing-page/writer.svg" />
        <div className="flex-1">
          <p className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#F25369] to-[#C375EF] font-bold leading-[4rem] text-center">Challenged to find clients,</p>
          <p className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#F25369] to-[#C375EF] font-bold leading-[4rem] text-center">tired of agency fees?</p>
          <p className="text-2xl font-semibold text-center mt-4">No easy way to manage requests and connect with clients.</p>
        </div>
        <img className="h-60" src="/landing-page/social.svg" />
      </div>
      <div className="flex items-center justify-center gap-x-16">
        <div className="flex flex-col items-center justify-center w-40">
          <img src="/landing-page/news-1.png" className="w-32 h-32" />
          <p className="text-center text-xl">Effortless request management</p>
        </div>
        <div className="flex flex-col items-center justify-center w-40">
          <img src="/landing-page/news-2.png" className="w-32 h-32" />
          <p className="text-center text-xl">Effortless request management</p>
        </div>
        <div className="flex flex-col items-center justify-center w-40">
          <img src="/landing-page/news-3.png" className="w-32 h-32" />
          <p className="text-center text-xl">Effortless request management</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
