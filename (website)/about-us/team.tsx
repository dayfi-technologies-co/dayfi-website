import { teamData } from "@/db/teamData";
import Image from "next/image";
import React from "react";

function Team() {
  return (
    <div className="max-content pt-[56px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="relative inline-block mb-[8px]">
            <h3 className="text-[#5645F5] font-tertiary font-[700] text-[20px] leading-[28px] relative z-10">
              The Geng
            </h3>
            {/* Blue accent line behind text */}
            <div className="absolute inset-0 bg-[#45D5F5] h-[4px] top-[70%] transform -translate-y-[100%] opacity-60"></div>
          </div>

          <div className="w-[400px] max-xlsm:w-full relative">
            <p className="font-secondary  text-center font-[400] text-[30px] leading-[48px] text-[#2A0079]">
              Meet the people behind Dayfi!
            </p>
            <Image
              src="/assets/svg/productStar.svg"
              blurDataURL="/assets/svg/productStar.svg"
              priority
              unoptimized={false}
              alt="image"
              width={23}
              height={23}
              className="absolute top-0 right-4 w-[23px] h-[23px]"
            />{" "}
          </div>
        </div>

        <div className="mt-[88px] flex justify-center flex-wrap items-center gap-x-[90px] gap-y-[36px] max-mdxl:gap-x-[50px] max-xlsm:gap-x-[20px]">
          {teamData?.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.img}
                blurDataURL={item.img}
                priority
                unoptimized={false}
                alt="image"
                width={207}
                height={207}
                className="w-[207px] h-[207px] max-mdxl:w-[150px] max-mdxl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]"
              />{" "}
              <p className="mt-[8px] font-tertiary text-center font-[700] text-[20px] leading-[28px] max-xlsm:text-[16px] max-xlsm:leading-[24px] text-[#2A0079]">
                {item.name}
              </p>
              <p className="mt-[2px] font-primary text-center font-[400] text-[16px] leading-[24px] text-[#5A5775]">
                {item.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
