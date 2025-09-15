"use client";
import { useState } from "react";
import Image from "next/image";
import { FaqQuestionsWithGroup } from "@/db/faqData";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  const groups = ["All", ...new Set(FaqQuestionsWithGroup.map((q) => q.group))];

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const filteredQuestions =
    selectedGroup === "All"
      ? FaqQuestionsWithGroup
      : FaqQuestionsWithGroup.filter((item) => item.group === selectedGroup);

  return (
    <div className="max-content pt-[64px] pb-[450px]">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl flex gap-8 max-mdxl:flex-col">
            {/* Sidebar */}
            <div className="">
              <div className="w-[249px] max-mdxl:hidden block bg-[#E9E7FE] rounded-[20px] p-4 shadow-sm">
                <ul className="flex flex-col gap-[16px]">
                  {groups.map((group) => (
                    <li key={group}>
                      <button
                        onClick={() => setSelectedGroup(group)}
                        className={`block w-full cursor-pointer text-left rounded-md text-[16px] leading-[24px] font-[700] transition-colors duration-200 ${
                          selectedGroup === group
                            ? "text-[#2A0079]"
                            : "text-[#5A5775]"
                        }`}
                      >
                        {group}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="max-mdxl:block hidden">
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="w-full p-3 border border-[#D9D3FF] rounded-md bg-white text-[#2A0079] focus:outline-none focus:ring-2 focus:ring-[#BDB6FB]"
                >
                  {groups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="flex-1">
              {filteredQuestions.map((item, index) => (
                <div
                  key={index}
                  className={`py-4 px-6 border-b border-[#D9D3FF] cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? "border-t-2 border-[#BDB6FB] shadow-sm bg-white pb-6"
                      : ""
                  }`}
                >
                  <div
                    className="flex items-center justify-between"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="font-tertiary text-[18px] leading-[24px] text-[#2A0079] font-bold">
                      {item.ques}
                    </h3>
                    <div className="transition-transform transform flex-shrink-0">
                      {activeIndex === index ? (
                        <Image
                          src="/assets/svg/faqOpen.svg"
                          alt="Minus"
                          width={20}
                          height={20}
                          className="rotate-45 w-5 h-5"
                        />
                      ) : (
                        <Image
                          src="/assets/svg/faqOpen.svg"
                          alt="Plus"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                      )}
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="mt-4">
                      <p className="font-primary text-[14px] leading-[20px] text-[#302D53]">
                        {item.ans}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
