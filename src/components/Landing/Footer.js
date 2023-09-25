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
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-12">
        <div className="col-span-3 flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-white rounded-full"></div>
            <p className="text-3xl font-medium mt-4">ABC</p>
          </div>
          <div className="flex gap-x-6 justify-center mt-8">
            {socialMedia?.map((media, idx) => (
              <button key={idx}>
                <img src={`/landing-page/${media.icon}.svg`} className="w-8 h-8" />
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="flex flex-col items-start gap-y-4 font-semibold">
            {links1?.map((link, idx) => (
              <button key={idx}>{link.name}</button>
            ))}
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="flex flex-col items-start gap-y-4 font-semibold">
            {links2?.map((link, idx) => (
              <button key={idx}>{link.name}</button>
            ))}
          </div>
        </div>
        <div className="col-span-5 flex justify-center">
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
