import React from "react";
import JoinUs from "../(landing)/joinUs";
import Faq from "../(landing)/faq";
import FooterTop from "../(landing)/footerTop";
import AboutHero from "./aboutHero";
import AboutBio from "./aboutBio";
import Team from "./team";

export default function AboutUs() {
  return (
    <div className="bg-[#F6F5FE] pt-[64px]">
      <AboutHero />
      <AboutBio />
      <Team />
      <JoinUs />
      <Faq />
      <FooterTop />
    </div>
  );
}
