import React from "react";
import FooterTop from "../(landing)/footerTop";
import FAQHero from "./faqHero";
import FaqSection from "./faqQue";

export default function Faqs() {
  return (
    <div className="bg-[#F6F5FE] pt-[64px]">
      <FAQHero />
      <FaqSection />
      <FooterTop />
    </div>
  );
}
