"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Our Products", hasDropdown: true, href: "/products" },
  { name: "About Us", hasDropdown: false, href: "/about-us" },
  { name: "FAQs", hasDropdown: false, href: "/faqs" },
  { name: "Our Blog", hasDropdown: false, href: "/blog" },
];

const productDropdownItems = [
  { name: "Swap Currency", href: "/currency-swap" },
  { name: "Transfer Funds", href: "/money-transfer" },
  { name: "Multiple Wallets", href: "/multiple-wallets" },
  { name: "Send with Dayfi ID", href: "/send-with-dayfi-id" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileProductDropdownOpen, setIsMobileProductDropdownOpen] =
    useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMobileNavigate = (href: string) => {
    setIsMobileProductDropdownOpen(false);
    router.push(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-[100px] py-[22px]">
      <div className="max-content">
        <div className="container">
          <div className="flex items-center justify-between">
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

            {/* Desktop Navigation */}
            <nav className="max-mdxl:hidden flex items-center gap-[48px] relative">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div>
                      <button className="font-tertiary font-[500] text-[16px] leading-[24px] text-[#838197]">
                        <div
                          className="flex items-center gap-1 cursor-pointer"
                          onClick={() =>
                            setIsProductDropdownOpen(!isProductDropdownOpen)
                          }
                        >
                          <span>{link.name}</span>
                          <Image
                            src="/assets/down.svg"
                            blurDataURL="/logo.svg"
                            priority
                            unoptimized={false}
                            alt="image"
                            width={20}
                            height={20}
                          />
                        </div>
                      </button>
                      {isProductDropdownOpen && (
                        <div
                          ref={dropdownRef}
                          className="absolute top-full left-0 cursor-pointer mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                        >
                          {productDropdownItems.map((item) => (
                            <span
                              onClick={() => {
                                router.push(item.href);
                                setIsProductDropdownOpen(false);
                              }}
                              key={item.name}
                              className="block px-4 py-2 cursor-pointer font-tertiary font-[500] text-[16px] leading-[24px] text-[#838197] hover:bg-gray-100"
                            >
                              {item.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-tertiary font-[500] text-[16px] leading-[24px] text-[#838197]"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="max-mdxl:hidden block">
              <button className="btn-primary">Join waiting list</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="max-mdxl:block hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12M6 12h12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="hidden max-mdxl:block bg-[#FFFFFF] mt-[30px] border-t-[2px] relative overflow-hidden border-[#02122E1A]  h-screen w-full pt-[30px]">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <div>
                        <div className="font-tertiary font-[500] text-[16px] leading-[24px] text-[#838197] cursor-pointer w-full text-left">
                          <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsMobileProductDropdownOpen(
                                !isMobileProductDropdownOpen
                              );
                              console.log(isMobileProductDropdownOpen);
                            }}
                          >
                            <span>{link.name}</span>
                            <Image
                              src="/assets/down.svg"
                              blurDataURL="/logo.svg"
                              priority
                              unoptimized={false}
                              alt="image"
                              width={20}
                              height={20}
                            />
                          </div>
                        </div>
                        {isMobileProductDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {productDropdownItems.map((item) => (
                              <div
                                key={item.name}
                                onClick={() => handleMobileNavigate(item.href)}
                                className="block font-tertiary font-[500] text-[16px] leading-[24px] text-[#838197] hover:bg-gray-100"
                              >
                                {item.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div
                        onClick={() => handleMobileNavigate(link.href)}
                        className="font-tertiary font-[500] text-[16px] leading-[24px] text-[#838197] hover:bg-gray-100"
                      >
                        {link.name}
                      </div>
                    )}
                  </div>
                ))}

                <div>
                  <button className="btn-primary">Join waiting list</button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
