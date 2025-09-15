"use client";
import { FaqQuestions } from "@/db/faqData";
import Image from "next/image";
import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <section className="py-[80px]">
        <div className="max-content">
          <div className="container">
            <div className="flex flex-col items-center">
              <div className="relative inline-block mb-[8px]">
                <h3 className="text-[#5645F5] font-tertiary font-[700] text-[20px] leading-[28px] relative z-10">
                  Answered Questions{" "}
                </h3>
                {/* Blue accent line behind text */}
                <div className="absolute inset-0 bg-[#45D5F5] h-[4px] top-[70%] transform -translate-y-[100%] opacity-60"></div>
              </div>

              <div className="w-[400px] max-xlsm:w-full relative">
                <p className="font-secondary  text-center font-[400] text-[30px] leading-[48px] text-[#2A0079]">
                  Questions? We’ve got answers!{" "}
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
            </div>

            {/* Questions */}
            <div className="flex justify-center">
              <div className="w-[786px] max-md:w-full mt-[32px]">
                {FaqQuestions?.slice(0, 4)?.map((item, index) => (
                  <div
                    key={index}
                    className={` py-[24px] px-[12px] cursor-pointer ${
                      activeIndex === index
                        ? " border-t-[2px] border-[#BDB6FB] shadow-lg bg-[#FFFFFF] pb-[40px] ease-in duration-500 "
                        : "border-b-[1px] border-[#BDB6FB] ease-out duration-500"
                    }`}
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3
                        className={` font-tertiary text-[20px] max-xlsm:text-[16px] max-xlsm:leading-[22px] leading-[28px] text-[#2A0079] font-[700] `}
                      >
                        {item.ques}
                      </h3>
                      <div className="transition-transform transform flex-shrink-0">
                        {activeIndex === index ? (
                          <div className="flex-shrink-0 transition ease-out rotate-[45deg] duration-300">
                            <Image
                              src="/assets/svg/faqOpen.svg"
                              blurDataURL="/assets/svg/faqOpen.svg"
                              priority
                              unoptimized={false}
                              alt="image"
                              width={32}
                              height={32}
                              className=" w-[32px] h-[32px]"
                            />{" "}
                          </div>
                        ) : (
                          <div className="flex-shrink-0 ease-out duration-300">
                            <Image
                              src="/assets/svg/faqOpen.svg"
                              blurDataURL="/assets/svg/faqOpen.svg"
                              priority
                              unoptimized={false}
                              alt="image"
                              width={32}
                              height={32}
                              className=" w-[32px] h-[32px]"
                            />{" "}
                          </div>
                        )}
                      </div>
                    </div>
                    {activeIndex === index && (
                      <div className=" mt-[20px] ">
                        <p className="font-[400] font-primary text-[16px] leading-[24px]  text-[#302D53] ease-in-out duration-800">
                          {item?.ans}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* btn */}

            <div className="flex justify-center mt-[24px]">
              <button className="btn-primary flex justify-center items-center gap-2">
                Join the waiting list{" "}
                <Image
                  src="/assets/svg/nextRoundArrow.svg"
                  blurDataURL="/assets/svg/nextRoundArrow.svg"
                  priority
                  unoptimized={false}
                  alt="image"
                  width={25}
                  height={24}
                  className=" w-[25px] h-[24px]"
                />{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
