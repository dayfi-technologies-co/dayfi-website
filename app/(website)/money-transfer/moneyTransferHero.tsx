import React from "react";

function MoneyTransferHero() {
  return (
    <div className="max-content">
      <div className="container">
        <div className="bg-[url('/assets/svg/moneyTransferHeroBg.svg')] bg-cover bg-no-repeat flex justify-center  py-[64px] px-[20px] max-xlsm:py-[30px] rounded-[50px] w-full">
          <div className="max-w-[728px] flex flex-col items-center">
            <p className="font-secondary  text-center font-[400] text-[60px] leading-[86px] max-md:text-[30px] max-md:leading-[48px] text-[#2A0079]">
              <span className="text-[#5645F5]">Money transfer, but</span>{" "}
              faster!{" "}
            </p>
            <p className="max-w-[546px] text-center max-xlsm:w-full text-[#302D53] font-primary font-[400] text-[16px] leading-[24px]">
              You can swap currencies on Dayfi quickly and securely; whether
              traveling abroad, making online purchases, saving, etc. This
              feature makes it easy to transact in different currencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoneyTransferHero;
