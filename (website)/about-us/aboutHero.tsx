import Image from "next/image";
import React from "react";

function AboutHero() {
  return (
    <div className="max-content">
      <div className="container">
        <div className="bg-[url('/assets/svg/aboutHeroImg.svg')] bg-cover bg-center bg-no-repeat flex justify-center  py-[64px] px-[20px] max-xlsm:py-[30px] rounded-[50px] h-[400px] w-full"></div>

        <div className="flex flex-col items-center mt-[64px]">
          <div className="w-[400px] max-xlsm:w-full relative">
            <p className="font-secondary  text-center font-[400] text-[30px] leading-[48px] text-[#2A0079]">
              Dayfi was born!
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

          <p className="mt-[8px] w-[685px] text-center max-sixm:w-full text-[#302D53] font-primary font-[400] text-[16px] leading-[24px]">
            The founders of Dayfi were passionate about finding innovative
            solutions to common financial problems. They saw firsthand how
            traditional financial systems could be slow, expensive, and
            inconvenient for users, and they knew there had to be a better way.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
