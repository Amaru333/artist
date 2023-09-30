import React from "react";

function ContactUs() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 my-20">
      <div className="shadow-xl border rounded-xl grid grid-cols-12 p-4">
        <div className="col-span-7 p-8 items-center justify-center hidden lg:flex">
          <img src="/landing-page/contact-us-illustration.svg" />
        </div>
        <div className="col-span-12 lg:col-span-5 border-black px-3 lg:px-8 flex flex-col justify-center">
          <p className="text-transparent text-2xl lg:text-3xl xl:text-4xl bg-clip-text bg-gradient-to-r from-[#F25369] to-[#C375EF] font-medium text-center">Ready to Join?</p>
          <p className="text-base lg:text-lg xl:text-xl text-center mt-2 lg:mt-4 mb-6">Elevate Your Artistry, Start Today.</p>
          <label htmlFor="name" className="text-xs lg:text-base">
            Name: <span className="text-red-500">*</span>
          </label>
          <input id="name" className="w-full !outline-none rounded-lg border border-slate-400 px-4 py-2 mt-1 mb-6" placeholder="Name" />
          <label htmlFor="email" className="text-xs lg:text-base">
            Email: <span className="text-red-500">*</span>
          </label>
          <input id="email" className="w-full !outline-none rounded-lg border border-slate-400 px-4 py-2 mt-1 mb-6" placeholder="Name" />
          <label htmlFor="phone" className="text-xs lg:text-base">
            Phone: <span className="text-red-500">*</span>
          </label>
          <input id="phone" className="w-full !outline-none rounded-lg border border-slate-400 px-4 py-2 mt-1 mb-6" placeholder="Name" />
          <label className="text-xs lg:text-base" htmlFor="medium">
            Artistic medium: <span className="text-red-500">*</span>
          </label>
          <input id="medium" className="w-full !outline-none rounded-lg border border-slate-400 px-4 py-2 mt-1 mb-6" placeholder="Name" />
          <label className="text-xs lg:text-base" htmlFor="portfolio">
            Portfolio Link: <span className="text-red-500">*</span>
          </label>
          <input id="portfolio" className="w-full !outline-none rounded-lg border border-slate-400 px-4 py-2 mt-1 mb-6" placeholder="Name" />
          <label className="text-xs lg:text-base" htmlFor="about">
            Tell Us About yourself and your work: <span className="text-red-500">*</span>
          </label>
          <input id="about" className="w-full !outline-none rounded-lg border border-slate-400 px-4 py-2 mt-1 mb-6" placeholder="Name" />
          <div className="flex items-center justify-end">
            <button className="bg-gradient-to-r from-[#F25369] to-[#C375EF] text-white px-4 py-2 rounded-full">Start Showcasing</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
