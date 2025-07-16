"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
    // Show success message or handle errors
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left column */}
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <Link href="#hero" className="inline-block mb-6">
              <Image
                src="/images/logo-name-white.png"
                alt="SmartCode Solutions"
                width={120}
                height={120}
              />
            </Link>

            <p className="text-gray-400 mb-8 max-w-md">
              SmartCode Solutions cung cấp dịch vụ phát triển phần mềm chuyên
              nghiệp, giải pháp tùy chỉnh và dịch vụ chuyển đổi số. Chuyển đổi
              doanh nghiệp của bạn với các giải pháp công nghệ tiên tiến của
              chúng tôi.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 bg-transparent border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-grow"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Get Started
              </button>
            </form>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-gray-700 mx-4"></div>

          {/* Right column */}
          <div className="lg:w-1/2 pl-0 lg:pl-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Phone</h3>
              <p className="text-gray-400 mb-8">0973 023 736</p>

              <h3 className="text-white text-lg font-semibold mb-4">Email</h3>
              <p className="text-gray-400">smartcodesolutions@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Center divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-6 md:mb-0">
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-300"
            >
              <FiFacebook />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-300"
            >
              <FiLinkedin />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-300"
            >
              <FiInstagram />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-300"
            >
              <FaTiktok className="text-sm" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-300"
            >
              <FiTwitter />
            </Link>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SmartCode Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
