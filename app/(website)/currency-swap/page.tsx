import React from "react";
import FooterTop from "../(landing)/footerTop";
import Faq from "../(landing)/faq";
import JoinUs from "../(landing)/joinUs";
import SwapSteps from "./swapSteps";
import SwapHero from "./swapHero";

const steps = [
  {
    img: "",
    title: "Select swap currency",
    description:
      "You can select from your range of wallets to swap from, and into, GBP to NGN? It's free!",
  },
  {
    img: "",
    title: "Provide swap amount",
    description:
      "Enter the amount you want to swap between your selected currencies",
  },
  {
    img: "",
    title: "Get new currency",
    description: "Complete the swap and receive your new currency instantly",
  },
];
function Page() {
  return (
    <div className="bg-[#F6F5FE] pt-[64px]">
      <SwapHero />
      <SwapSteps steps={steps} />
      <JoinUs />
      <Faq />
      <FooterTop />
    </div>
  );
}

export default Page;
