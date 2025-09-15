import Image from "next/image";
import React from "react";

function JoinUs() {
  return (
    <div>
      <section className="pt-[80px] overflow-hidden">
        <div className="max-content">
          <div className="container">
            <div className="flex flex-col items-center">
              <div className="relative inline-block mb-[8px]">
                <h3 className="text-[#5645F5] font-tertiary font-[700] text-[20px] leading-[28px] relative z-10">
                  Want to join us?{" "}
                </h3>
                {/* Blue accent line behind text */}
                <div className="absolute inset-0 bg-[#45D5F5] h-[4px] top-[70%] transform -translate-y-[100%] opacity-60"></div>
              </div>

              <div className="w-[400px] max-xlsm:w-full relative">
                <p className="font-secondary  text-center font-[400] text-[30px] leading-[48px] text-[#2A0079]">
                  Get started in three easy steps{" "}
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
                Setting up Dayfi is easy. Follow the steps below to get started.
              </p>
            </div>

            {/* Steps */}

            <div className="flex justify-between max-mdxl:flex-col gap-[40px] mt-[40px]">
              <div className="relative max-w-[400px] max-xlsm:w-full">
                <div className="w-[56px] h-[56px] rounded-full bg-[#CAC5FC] font-[700] font-tertiary text-[28px] leading-[28px] flex items-center justify-center">
                  1
                </div>
                <p className="mt-[24px] text-[#2A0079] font-secondary font-[400] text-[20px] leading-[32px]">
                  Find the Dayfi app
                </p>
                <p className="mt-[16px] text-[#302D53] font-primary font-[400] text-[16px] leading-[24px]">
                  Find the Dayfi app in the App Store (for Apple devices) or the
                  Play Store (for Android devices). You can easily search for
                  the app by typing Dayfi in the search bar to download and
                  install it
                </p>
                <Image
                  src="/assets/svg/stepArrow.svg"
                  blurDataURL="/assets/svg/stepArrow.svg"
                  priority
                  unoptimized={false}
                  alt="image"
                  width={180}
                  height={60}
                  className="absolute top-[10px] -right-[30px] w-[180px] h-[60px] max-mdxl:hidden"
                />{" "}
              </div>

              <div className=" max-w-[400px] h-[343px] max-mdxl:h-full flex flex-col justify-center max-xlsm:w-full">
                <div className=" w-[56px] h-[56px] rounded-full bg-[#95DBC4] font-[700] font-tertiary text-[28px] leading-[28px] flex items-center justify-center">
                  2
                </div>
                <p className="mt-[24px] text-[#2A0079] font-secondary font-[400] text-[20px] leading-[32px]">
                  Install Dayfi app{" "}
                </p>
                <p className="mt-[16px] text-[#302D53] font-primary font-[400] text-[16px] leading-[24px]">
                  Install the app on your device by tapping the Install button
                  and waiting for the download process to complete. Depending on
                  your device and internet connection, this may take a few
                  minutes.
                </p>
              </div>

              <div className="relative max-w-[400px] h-[343px] max-mdxl:h-full flex flex-col justify-end max-xlsm:w-full">
                <div className="w-[56px] h-[56px] rounded-full bg-[#FFADD2] font-[700] font-tertiary text-[28px] leading-[28px] flex items-center justify-center">
                  3
                </div>
                <p className="mt-[24px] text-[#2A0079] font-secondary font-[400] text-[20px] leading-[32px]">
                  Register/Log in{" "}
                </p>
                <p className="mt-[16px] text-[#302D53] font-primary font-[400] text-[16px] leading-[24px]">
                  Once the app is installed, launch it and register for a new
                  account or log in to your existing account to access all of
                  the features and benefits of Dayfi.
                </p>
                <Image
                  src="/assets/svg/stepArrowC.svg"
                  blurDataURL="/assets/svg/stepArrowC.svg"
                  priority
                  unoptimized={false}
                  alt="image"
                  width={120}
                  height={72}
                  className="absolute top-[50px] -left-[140px] w-[120px] h-[72px] max-mdxl:hidden"
                />{" "}
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

export default JoinUs;
