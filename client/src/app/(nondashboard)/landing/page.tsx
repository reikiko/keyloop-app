import React from "react";
import HeroSection from "@/app/(nondashboard)/landing/HeroSection";
import FeaturesSection from "@/app/(nondashboard)/landing/FeaturesSection";
import DiscoverSection from "@/app/(nondashboard)/landing/DiscoverSection";
import CallToActionSection from "@/app/(nondashboard)/landing/CallToActionSection";
import FooterSection from "@/app/(nondashboard)/landing/FooterSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default Landing;
