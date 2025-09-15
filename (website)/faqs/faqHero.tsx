import React from "react";

function FAQHero() {
  return (
    <div className="max-content">
      <div className="container">
        <div className="bg-[url('/assets/png/faqHome.png')] bg-cover bg-no-repeat flex justify-center  py-[105px] px-[20px] max-xlsm:py-[50px] rounded-[50px] w-full">
          <div className="max-w-[683px] flex flex-col items-center">
            <p className="font-secondary  text-center font-[400] text-[60px] leading-[86px] max-md:text-[30px] max-md:leading-[48px] text-[#2A0079]">
              Have {""}
              <span className="text-[#5645F5]">Questions?</span> We have {""}
              <span className="text-[#5645F5]">answers!</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQHero;
