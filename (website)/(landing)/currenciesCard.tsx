import Image from "next/image";
import React from "react";

function CurrenciesCard() {
  return (
    <div className="bg-[url('/assets/svg/linePattern.svg')] bg-[#CAC5FC] pl-[64px] max-md:px-[20px] py-[30px] rounded-[50px] w-full overflow-hidden">
      <div className="w-full h-full flex justify-between items-center max-md:flex-col max-md:gap-[20px]">
        <div className="">
          <p className="max-w-[437px] font-secondary  text-left font-[400] text-[32px] leading-[48px] text-[#2A0079]">
            Multiple Currencies = Multiple Wallets!
          </p>
          <p className="mt-[10px] max-w-[657px] text-left max-sixm:w-full text-[#302D53] font-primary font-[400] text-[16px] leading-[24px]">
            Experience the convenience and flexibility of managing multiple
            currencies with Dayfi. Our app allows you to hold multiple wallets
            and easily switch between them, making it easy to transact in
            various currencies. all.
          </p>
        </div>
        <Image
          src="/assets/svg/currencies.svg"
          blurDataURL="/assets/svg/currencies.svg"
          priority
          unoptimized={false}
          alt="image"
          width={355}
          height={315}
          className="w-[355px] h-[315px]"
        />{" "}
      </div>
    </div>
  );
}

export default CurrenciesCard;
