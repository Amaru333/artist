import Navbar from "@/common/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import DetailsSection from "./DetailsSection";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function Landing() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DetailsSection />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Landing;
