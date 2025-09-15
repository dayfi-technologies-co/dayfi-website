import Image from "next/image";
import React from "react";

function HomeHero() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="/assets/png/heroBg.png"
          blurDataURL="/assets/png/heroBg.png"
          priority
          unoptimized={false}
          alt="image"
          width={1400}
          height={784}
          className="w-full h-[784px] max-lg:object-cover object-left max-xlsm:blur-sm"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center h-full  w-full">
          <div className="max-content">
            <div className="container">
              <div className="flex flex-col items-center w-[721px] max-mdxl:w-[500px] max-xlsm:w-[400px] max-sm:w-[270px]">
                <p className="font-secondary text-center font-[400] text-[60px] leading-[86px] max-mdxl:text-[40px] max-mdxl:leading-[50px] max-xlsm:text-[30px] max-xlsm:leading-[40px] text-[#2A0079]">
                  International payments for everyone{" "}
                </p>
                <p className="mt-[32px] font-primary text-center font-[400] text-[16px] leading-[24px] text-[#302D53]">
                  Open multi-currency accounts. Send and receive money globally.
                  Your passport to seamless transactions across across Africa
                  and beyond.
                </p>
                <p className="mt-[12px] font-primary text-center font-[400] text-[16px] leading-[24px] text-[#302D53]">
                  Join dayfi today and experience the future of global payments.
                </p>
                <button className="mt-[68px] btn-primary">
                  Join the waiting list
                </button>

                <p className="mt-[40px] font-primary text-center font-[400] text-[12px] leading-[16px] text-[#5A5775]">
                  Coming to
                </p>
                <Image
                  src="/assets/svg/comingArrow.svg"
                  blurDataURL="/assets/svg/comingArrow.svg"
                  priority
                  unoptimized={false}
                  alt="image"
                  width={17}
                  height={37}
                  className="mt-[4px] w-[17px] h-[37px]"
                />
                <div className="mt-[3px] flex items-center max-sm:flex-wrap gap-[8px]">
                  <button className="btn-secondary !py-[10px] !max-sm:px-[5px] flex items-center justify-center gap-[5px]">
                    <Image
                      src="/assets/svg/appstore.svg"
                      blurDataURL="/assets/svg/appstore.svg"
                      priority
                      unoptimized={false}
                      alt="image"
                      width={13}
                      height={15}
                      className="w-[13px] h-[15px]"
                    />{" "}
                    App Store{" "}
                  </button>
                  <button className="btn-secondary !py-[10px] flex items-center justify-center gap-[5px]">
                    <Image
                      src="/assets/svg/playstore.svg"
                      blurDataURL="/assets/svg/playstore.svg"
                      priority
                      unoptimized={false}
                      alt="image"
                      width={17}
                      height={17}
                      className="w-[17px] h-[17px]"
                    />{" "}
                    Play Store{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
