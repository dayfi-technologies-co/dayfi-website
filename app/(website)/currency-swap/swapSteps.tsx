import Image from "next/image";
import React from "react";
import StepsAnimationCard, { IStepsType } from "./stepsAnimationCard";

function SwapSteps({ steps }: { steps: IStepsType }) {
  return (
    <div>
      <section className=" bg-[#F6F5FE] py-[80px]">
        <div className="max-content">
          <div className="container">
            <div className="flex flex-col items-center">
              <div className="relative inline-block mb-[8px]">
                <h3 className="text-[#5645F5] font-tertiary font-[700] text-[20px] leading-[28px] relative z-10">
                  Want a swap NGN to GBP?{" "}
                </h3>
                {/* Blue accent line behind text */}
                <div className="absolute inset-0 bg-[#45D5F5] h-[4px] top-[70%] transform -translate-y-[100%] opacity-60"></div>
              </div>

              <div className="w-[436px] max-xlsm:w-full relative">
                <p className="font-secondary  text-center font-[400] text-[30px] leading-[48px] text-[#2A0079]">
                  Simple three steps{" "}
                </p>
                <Image
                  src="/assets/svg/productStar.svg"
                  blurDataURL="/assets/svg/productStar.svg"
                  priority
                  unoptimized={false}
                  alt="image"
                  width={23}
                  height={23}
                  className="absolute top-0 -right-4 w-[23px] h-[23px]"
                />{" "}
              </div>
              <div className="mt-[32px] w-full">
                <StepsAnimationCard steps={steps} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SwapSteps;
