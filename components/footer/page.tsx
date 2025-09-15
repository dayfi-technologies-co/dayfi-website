"use client";
// import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const footerDataA = {
  heading: "Our Products",
  list: [
    {
      title: "Swap Currency",
      path: "/",
    },
    {
      title: "Transfer Funds",
      path: "/",
    },
    {
      title: "Multiple Wallets",
      path: "/",
    },
  ],
};

export const footerDataB = {
  heading: "Company",
  list: [
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "FAQ",
      path: "/faqs",
    },
    {
      title: "Our Blog",
      path: "/blog",
    },
  ],
};

export const footerDataC = {
  heading: "Contact",
  email: "support@dayfi.co",
  country: "Nigeria",
  address: "21 Opayemi Str., Yaba, Lagos",
};

export const footerSocialIcons = [
  {
    img: "/assets/svg/facebook.svg",
    link: "https://www.facebook.com/",
  },
  {
    img: "/assets/svg/x.svg",
    link: "https://x.com/",
  },
  {
    img: "/assets/svg/linkedin.svg",
    link: "https://www.linkedin.com/",
  },
  {
    img: "/assets/svg/instagram.svg",
    link: "https://www.instagram.com/",
  },
];

export default function Footer() {
  const router = useRouter();
  const year = new Date().getFullYear();

  // const handleNavigate = (href: string) => {
  //   router.push(href);
  // };

  return (
    <footer className=" w-full bg-[#E9E7FE]  pt-[39px] pb-[106px]">
      <div className="max-content">
        <div className="container">
          <div className="flex gap-[87px] max-mdxl:flex-col max-mdxl:gap-[40px]">
            <div className="w-[389px] max-xlsm:w-full ">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/")}
              >
                <div className="cursor-pointer">
                  <Image
                    src="/logo.svg"
                    blurDataURL="/logo.svg"
                    priority
                    unoptimized={false}
                    alt="image"
                    width={26}
                    height={26}
                  />
                </div>
                <span className="font-primary text-[24px] font-[700] text-[#19156F]">
                  dayfi
                </span>
              </div>
              <div className="">
                <p className="mt-[16px] font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
                  Dayfi offers a reliable way to send and receive money from any
                  part of the world. We eliminate the risks and hiccups
                  associated with online transactions by delivering a cheap,
                  quick, and secure portal for completing financial obligations.
                </p>
                <p className="mt-[16px] font-primary font-[400] text-[12px] leading-[16px] text-[#5A5775]">
                  {year} © Dayfi
                </p>
              </div>
            </div>

            <div className="flex gap-[35px] max-mdxl:flex-wrap ">
              <div className="w-[157px]">
                <p className="font-tertiary font-[700] text-[16px] leading-[24px] text-[#2A0079]">
                  {footerDataA?.heading.toUpperCase()}
                </p>
                <div className="mt-[16px] flex flex-col gap-[19px]">
                  {footerDataA?.list?.map((item, i) => (
                    <p
                      key={i}
                      onClick={() => router.push(item?.path)}
                      className="text-[#5A5775] font-primary font-[300] text-[16px] leading-[24px] cursor-pointer"
                    >
                      {item?.title}
                    </p>
                  ))}
                </div>
              </div>

              <div className="w-[157px]">
                <p className="font-tertiary font-[700] text-[16px] leading-[24px] text-[#2A0079]">
                  {footerDataB?.heading.toUpperCase()}
                </p>
                <div className="mt-[16px] flex flex-col gap-[19px]">
                  {footerDataB?.list?.map((item, i) => (
                    <p
                      key={i}
                      onClick={() => router.push(item?.path)}
                      className="text-[#5A5775] font-primary font-[300] text-[16px] leading-[24px] cursor-pointer"
                    >
                      {item?.title}
                    </p>
                  ))}
                </div>
              </div>

              <div className="w-[270px] max-sm:w-full">
                <p className="font-tertiary font-[700] text-[16px] leading-[24px] text-[#2A0079]">
                  {footerDataC?.heading.toUpperCase()}
                </p>
                <div className="mt-[16px]">
                  <div>
                    <a href={`mailto:${footerDataC?.email}`}>
                      <p className="text-[#5A5775] font-primary font-[300] text-[16px] leading-[24px] cursor-pointer">
                        {footerDataC?.email}
                      </p>
                    </a>
                    <p className="mt-[19px] text-[#5A5775] font-primary font-[700] text-[16px] leading-[24px] cursor-pointer">
                      {footerDataC?.country}
                    </p>

                    <p className="mt-[19px] text-[#5A5775] font-primary font-[300] text-[16px] leading-[24px] cursor-pointer">
                      {footerDataC?.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="max-content">
        <div className="container">
          <div className="w-full flex flex-col items-end max-mdxl:items-start">
            <div className="flex gap-[8px] mt-[24px] max-xlsm:mt-[32px] cursor-pointer">
              {footerSocialIcons?.map((icon, i) => (
                <a key={i} href={icon?.link} target="_blank">
                  <Image
                    src={icon?.img}
                    blurDataURL={icon?.img}
                    priority
                    unoptimized={false}
                    alt="image"
                    width={42}
                    height={42}
                  />
                </a>
              ))}
            </div>
            <div className="flex items-center max-xlsm:flex-wrap gap-[16px] mt-[16px]">
              <p className="font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
                Privacy Policy
              </p>
              <p className="font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
                Terms of Use{" "}
              </p>
              <p className="font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
                Acceptable Use Policy{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Line */}
      <div className="w-full flex justify-end my-[22px] border-b-[1px] border-[#D3CFFC]"></div>

      <div className="max-content">
        <div className="container">
          <div>
            <p className="font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
              Dayfi is a product of{" "}
              <span className="text-[#5645F5]">Dayfi Technologies Inc.</span>
              and its affiliates, collectively referred to as Dayfi. Dayfi is a
              private limited company registered as a C Corporation in Delaware,
              USA, with Registration number 3911022.{" "}
            </p>
            <p className="mt-[24px] font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
              Dayfi Technologies is not a licensed bank. Banking services on
              Dayfi are facilitated through partnerships with licensed financial
              institutions.
            </p>
            <p className="mt-[24px] font-primary font-[700] text-[16px] leading-[24px] text-[#2A0079]">
              Corporate Details
            </p>
            <p className="mt-[17px] font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
              <span className="font-[700]">Company Name: </span>Dayfi
              Technologies, Co.{" "}
            </p>
            <p className="mt-[17px] font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
              Our NGN accounts are provided by Safehaven MFB, which is fully
              licensed by the Central Bank of Nigeria (CBN) and insured by the
              Nigeria Deposit Insurance Corporation (NDIC). Other currency
              accounts offered by Dayfi are provided by licensed financial
              institutions in their respective jurisdictions.
            </p>

            {/* Row 2 */}
            <p className="mt-[24px] font-primary font-[700] text-[16px] leading-[24px] text-[#2A0079]">
              Compliance and Security{" "}
            </p>
            <p className="mt-[17px] font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
              Real-time fraud and transaction monitoring are provided by Dayfi,
              ensuring that all operations maintain the highest standards of
              security and regulatory compliance. Digital identity verification
              and KYC services are provided by Smile ID.
            </p>

            {/* Row 3 */}
            <p className="mt-[24px] font-primary font-[700] text-[16px] leading-[24px] text-[#2A0079]">
              Dayfi Services{" "}
            </p>
            <p className="mt-[17px] font-primary font-[400] text-[14px] leading-[20px] text-[#5A5775]">
              Dayfi offers services exclusively to eligible individuals and
              businesses. The information on this website is for informational
              purposes only and does not constitute an offer to engage in any
              transaction. This website is not directed at persons in
              jurisdictions where its distribution or use would violate local
              laws or regulations. By accessing this website, you do so at your
              own risk and initiative, confirming that you will not act on the
              information provided if you are not eligible. For more
              information, please read our Terms of Use . Copyright ©️ Dayfi.
              {year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
