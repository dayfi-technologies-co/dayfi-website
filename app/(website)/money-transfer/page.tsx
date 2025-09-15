import React from "react";
import SwapSteps from "../currency-swap/swapSteps";
import JoinUs from "../(landing)/joinUs";
import Faq from "../(landing)/faq";
import FooterTop from "../(landing)/footerTop";
import CurrenciesHero from "./moneyTransferHero";

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
      <CurrenciesHero />
      <SwapSteps steps={steps} />
      <JoinUs />
      <Faq />
      <FooterTop />
    </div>
  );
}

export default Page;
