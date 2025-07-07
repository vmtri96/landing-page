"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/hero.module.scss";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small timeout to ensure the animation starts after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-7xl min-h-[800px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200 mb-8">
      <div className="min-h-[800px] flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 lg:py-16 items-center">
        <div className="flex-1 text-center lg:text-left">
          <h1
            className={`text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Giải pháp công nghệ thông minh - SmartCode Solutions
          </h1>
          <p
            className={`text-lg text-gray-600 mb-8 max-w-2xl transition-opacity duration-1000 ease-in-out delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            SmartCode Solutions mang đến giải pháp thiết kế website, ứng dụng và
            phần mềm chuyên nghiệp, tối ưu SEO và trải nghiệm người dùng. Hãy
            bắt đầu hành trình số hóa doanh nghiệp của bạn!
          </p>
          <Link
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            href="#contact"
            style={{ transitionDelay: "600ms" }}
          >
            Liên hệ ngay
          </Link>
        </div>

        <div
          className={`flex-1 max-w-lg lg:max-w-none transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <img
            src="/images/hero.jpg"
            alt="Hero Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
