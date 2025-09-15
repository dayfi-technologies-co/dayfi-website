import Image from "next/image";
import React from "react";

function AboutBio() {
  return (
    <div className="max-content pt-[32px]">
      <div className="container">
        <div className="p-[40px] bg-[#CAC5FC] rounded-[50px] w-full flex justify-end">
          <Image
            src="/assets/svg/aboutGroupImg.svg"
            blurDataURL="/assets/svg/aboutGroupImg.svg"
            priority
            unoptimized={false}
            alt="image"
            width={522}
            height={472}
            className="w-[522px] h-[472px] max-xlsm:w-full max-xlsm:h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutBio;
