"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const menu = [
    { name: "Trang chủ", link: "#hero", active: true },
    { name: "Quy trình làm việc", link: "#working-process" },
    { name: "Dịch vụ", link: "#services" },
    { name: "Giới thiệu", link: "#client-pathway" },
    // { name: "FAQs", link: "#" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-white z-50">
      <nav className="border-b border-gray-200 py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link className="flex-shrink-0 mr-8" href="#hero">
              <Image
                src="/images/newlogo.png"
                alt="logo here"
                width={120}
                height={40}
                className="h-8 md:h-10"
              />
            </Link>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div
              className={`${
                open ? "block" : "hidden"
              } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none border-t md:border-t-0 border-gray-200 md:border-0`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
                <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                  {menu.map((item, index) => (
                    <li key={index}>
                      <Link
                        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          item.active
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                        href={item.link}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                  <div className="flex items-center px-4 py-2 border-l border-r border-gray-200 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>0973 023 736</span>
                  </div>
                  <Link
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    href="#contact"
                  >
                    Liên hệ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
