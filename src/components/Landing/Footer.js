import React from "react";

function Footer() {
  const socialMedia = [
    {
      icon: "fb",
      link: "/",
    },
    {
      icon: "insta",
      link: "/",
    },
    {
      icon: "twitter",
      link: "/",
    },
    {
      icon: "in",
      link: "/",
    },
  ];
  const links1 = [
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
    {
      name: "Awards",
      link: "/",
    },
    {
      name: "Advantages",
      link: "/",
    },
    {
      name: "Representatives",
      link: "/",
    },
  ];
  const links2 = [
    {
      name: "Terms & Conditions",
      link: "/",
    },
    {
      name: "Privacy Policy",
      link: "/",
    },
    {
      name: "Disclaimer",
      link: "/",
    },
    {
      name: "Our partners",
      link: "/",
    },
  ];
  return (
    <div className="bg-[url('/landing-page/footer-bg.svg')] bg-cover bg-no-repeat bg-top w-full h-full pb-16 pt-28">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-12 gap-y-6">
        <div className="col-span-6 lg:col-span-3 flex flex-col order-1 lg:order-1">
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full"></div>
            <p className="text-lg lg:text-3xl font-medium mt-2 lg:mt-4">ABC</p>
          </div>
          <div className="flex gap-x-3 lg:gap-x-6 justify-center mt-2 lg:mt-8">
            {socialMedia?.map((media, idx) => (
              <button key={idx}>
                <img src={`/landing-page/${media.icon}.svg`} className="w-5 h-5 lg:w-8 lg:h-8" />
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2 flex justify-center order-3 lg:order-2">
          <div className="flex flex-col items-start gap-y-4 font-semibold">
            {links1?.map((link, idx) => (
              <button key={idx}>{link.name}</button>
            ))}
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2 flex justify-center order-4 lg:order-3">
          <div className="flex flex-col items-start gap-y-4 font-semibold">
            {links2?.map((link, idx) => (
              <button key={idx}>{link.name}</button>
            ))}
          </div>
        </div>
        <div className="col-span-6 lg:col-span-5 flex justify-center items-center lg:items-start order-2 lg:order-4">
          <div className="flex flex-col gap-y-4">
            <p className="text-[#E6557E]">Get in touch</p>
            <div className="flex items-center gap-x-2">
              <img src="/landing-page/whatsapp.svg" className="w-6 h-6" />
              <p>+910099887766</p>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/landing-page/mail.svg" className="w-6 h-6" />
              <p>ABC@India.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
