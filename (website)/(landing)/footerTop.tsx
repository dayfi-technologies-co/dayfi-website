import Image from "next/image";
import React from "react";

function FooterTop() {
  return (
    <div className="max-content pb-[63px]">
      <div className="container">
        <div className="bg-[url('/assets/svg/footerPattern.svg')] bg-[#040218] px-[64px] max-md:px-[20px] pt-[30px] rounded-[50px] w-full overflow-hidden">
          <div className="w-full h-full flex justify-between items-center max-md:flex-col max-md:gap-[20px]">
            <div className=""></div>
            <Image
              src="/assets/svg/footerPhone.svg"
              blurDataURL="/assets/svg/footerPhone.svg"
              priority
              unoptimized={false}
              alt="image"
              width={355}
              height={315}
              className="w-[355px] h-[315px]"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
