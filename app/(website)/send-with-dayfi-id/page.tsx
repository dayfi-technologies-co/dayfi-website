import React from "react";
import SwapSteps from "../currency-swap/swapSteps";
import JoinUs from "../(landing)/joinUs";
import Faq from "../(landing)/faq";
import FooterTop from "../(landing)/footerTop";
import SendWIthIdHero from "./sendWithIdHero";

const steps = [
  {
    img: "",
    title: "Create a NGN Wallet",
    description:
      "Your virtual card will be funded from your NGN wallet, a prompt will be presented for you to create one.",
  },
  {
    img: "",
    title: "Complete verification process",
    description:
      "Complete the verification process to receive your NGN wallet address.",
  },
  {
    img: "",
    title: "Start spending, globally!",
    description: "You can now send and receive payments globally.",
  },
];
function Page() {
  return (
    <div className="bg-[#F6F5FE] pt-[64px]">
      <SendWIthIdHero />
      <SwapSteps steps={steps} />
      <JoinUs />
      <Faq />
      <FooterTop />
    </div>
  );
}

export default Page;
