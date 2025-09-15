"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export type IStepsType = {
  img: string;
  title: string;
  description: string;
}[];
function StepsAnimationCard({ steps }: { steps: IStepsType }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const pageData = steps[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full">
      <div className="bg-[url('/assets/svg/stepsPattern.svg')] bg-contain bg-[#E9E7FE] px-[64px] max-md:px-[20px] pt-[30px] rounded-[50px] w-full overflow-hidden">
        <div className="w-full h-full flex justify-between items-center max-md:flex-col max-md:gap-[20px]">
          <div className="w-[584px]">
            <div>
              {steps.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-4 relative ${
                    index === currentIndex && index < steps?.length - 1
                      ? "h-[158px]"
                      : "h-[60px]"
                  }`}
                >
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute left-[13px] top-6 w-[2px]  -translate-x-0.5 ${
                        index === currentIndex ? "h-[120px]" : "h-[36px]"
                      }`}
                    >
                      <div
                        className={`w-full h-full ${
                          index === currentIndex
                            ? // ? "bg-[#5645F5]"
                              " border-dashed border-1 border-[#5645F5]"
                            : "bg-[#5645F5]/25"
                        }`}
                      />
                    </div>
                  )}
                  <div
                    className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full border-[1px] relative z-10 ${
                      index === currentIndex
                        ? "border-[#5645F5]" // Current step
                        : "border-[#5645F5]/25 " // Future steps
                    }`}
                  >
                    {index === currentIndex ? (
                      // Current step: white dot
                      <div className="h-[16px] w-[16px] rounded-full bg-[#5645F5]" />
                    ) : (
                      // Future steps: gray dot
                      <div className="h-[16px] w-[16px] rounded-full bg-[#5645F5]/25" />
                    )}
                  </div>

                  <div>
                    <p
                      className={`font-[700] font-tertiary text-[20px] leading-[28px]  ${
                        index === currentIndex
                          ? "text-[#2A0079]"
                          : "text-[#5A5775]"
                      }`}
                    >
                      {item?.title}
                    </p>
                    {currentIndex === index && (
                      <p
                        className={`mt-[10px] font-primary font-[400] text-[20px] leading-[28px] ${
                          index === currentIndex
                            ? "text-[#2A0079]"
                            : "text-[#5A5775]"
                        } `}
                      >
                        {item?.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/assets/svg/ngnSwap.svg"
            blurDataURL="/assets/svg/ngnSwap.svg"
            priority
            unoptimized={false}
            alt="image"
            width={345}
            height={315}
            className="w-[345px] h-[315px]"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default StepsAnimationCard;
