import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Want to receive money from loved ones?",
    subTitle:
      "Distance is no barrier with Dayfi. Easily receive and send money to friends and family, no matter where you are. Our secure platform helps you manage your finances and keep track of all your payments to stay connected.",
    img: "/assets/svg/recieveMoney.svg",
    className: "h-[695px]",
    bg: "#95DBC4",
  },
  {
    title: "Fast and Hassle-free money transfer!",
    subTitle:
      "Get lightning-fast, hassle-free money transfers with Dayfi. Our platform allows you to send and receive payments quickly and securely, faster than many other platforms.",
    img: "/assets/svg/fastMoney.svg",
    className: "h-[636px]",
    bg: "#FFADD2",
  },
  {
    title: "Send and receive for FREE with your Dayfi ID!",
    subTitle:
      "Our platform allows you to make transactions without incurring charges by using a unique tag generated within the app. Enjoy the convenience and cost-saving benefits of this feature with Dayfi.",
    img: "/assets/svg/sendWithId.svg",
    className: "h-[630px]",
    bg: "#FEEBB4",
  },
  {
    title: "Swap Currencies Quickly and Securely",
    subTitle:
      "Our platform allows you to quickly and securely swap between various currencies, so you can easily make transactions and manage your finances in different currencies.",
    img: "/assets/svg/swapCurrency.svg",
    className: "h-[689px] -mt-[60px] max-sixm:mt-[0px]",
    bg: "#B1EDFB",
  },
];
function ServiceTypes() {
  return (
    <div>
      <div className="grid grid-cols-2 max-sixm:grid-cols-1 gap-x-[20px] gap-y-[32px]">
        {data.map((item, index) => (
          <div
            key={index}
            className={`rounded-[50px] px-[40px] pt-[40px] flex flex-col justify-between overflow-hidden bg-[url('/assets/svg/bgDots.svg')] ${item.className}`}
            style={{ backgroundColor: item.bg }}
          >
            <div className="flex flex-col">
              <p className="max-w-[456px] max-mdxl:w-full font-secondary font-[400] text-[30px] leading-[48px] text-[#2A0079]">
                {item.title}
              </p>

              <p className="mt-[19px] max-w-[460px] max-sixm:w-full text-[#302D53] font-primary font-[400] text-[16px] leading-[24px]">
                {item.subTitle}
              </p>
            </div>
            <div>
              <Image
                src={item.img}
                blurDataURL={item.img}
                priority
                unoptimized={false}
                alt="image"
                width={640}
                height={1198}
                className=" w-[640px] max-mdxl:w-full hover:scale-110 hover:transition-all duration-300 ease-in-out"
              />{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceTypes;
