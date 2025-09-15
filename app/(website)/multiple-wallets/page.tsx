import React from "react";
import SwapSteps from "../currency-swap/swapSteps";
import JoinUs from "../(landing)/joinUs";
import Faq from "../(landing)/faq";
import FooterTop from "../(landing)/footerTop";
import CurrenciesHero from "./currenciesHero";

const steps = [
  {
    img: "",
    title: "Select your preferred wallet",
    description:
      "When you have a range of wallets with money in them, you can make a choice on the wallets you want to send from.",
  },
  {
    img: "",
    title: "Method of sending & amount",
    description:
      "Enter the amount you want to swap between your selected currencies",
  },
  {
    img: "",
    title: "Yaaay! Successful",
    description: "Complete the swap and receive your new currency instantly",
  },
];
function Page() {
  return (
    <div className="bg-[#F6F5FE] pt-[64px]">
      <CurrenciesHero />
      <SwapSteps steps={steps} />
      <JoinUs />
      <Faq />
      <FooterTop />
    </div>
  );
}

export default Page;
