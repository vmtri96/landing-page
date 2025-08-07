"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { sendEmail } from "@/services/emailService";

const Footer = () => {
  const [email, setEmail] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      await sendEmail({
        name: "Newsletter Subscriber",
        email: email,
        phone: "N/A",
        message: "Đăng ký nhận newsletter từ footer",
      });
      setSubmitSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
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
                src="/images/logo-name.png"
                alt="Smart Code Digital Solutions Co., Ltd."
                width={140}
                height={140}
                className="filter brightness-0 invert"
              />
            </Link>

            <p className="text-gray-400 mb-8 max-w-md">
              Smart Code Digital Solutions Co., Ltd. cung cấp dịch vụ phát triển
              phần mềm chuyên nghiệp, giải pháp tùy chỉnh và dịch vụ chuyển đổi
              số. Chuyển đổi doanh nghiệp của bạn với các giải pháp công nghệ
              tiên tiến của chúng tôi.
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
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Đang gửi..." : "Get Started"}
              </button>
            </form>

            {submitSuccess && (
              <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm mb-4">
                Đăng ký thành công! Cảm ơn bạn đã quan tâm.
              </div>
            )}

            {submitError && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm mb-4">
                Có lỗi xảy ra. Vui lòng thử lại sau.
              </div>
            )}
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-gray-700 mx-4"></div>

          {/* Right column */}
          <div className="lg:w-1/2 pl-0 lg:pl-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Phone</h3>
              <p className="text-gray-400 mb-6">0967 476 659</p>

              <h3 className="text-white text-lg font-semibold mb-4">Email</h3>
              <p className="text-gray-400 mb-6">smartcodesolutions@gmail.com</p>

              <h3 className="text-white text-lg font-semibold mb-4">
                Mã số thuế
              </h3>
              <p className="text-gray-400 mb-6">1801799386</p>

              <h3 className="text-white text-lg font-semibold mb-4">Địa chỉ</h3>
              <p className="text-gray-400">
                Cạnh 29E1, Đường F5, Khu Dân Cư 3A, Phường An Bình, Thành phố
                Cần Thơ, Việt Nam
              </p>
            </div>
          </div>
        </div>

        {/* Center divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              Chuyên nghiệp - Uy tín - Chất lượng
            </p>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Smart Code Digital Solutions Co., Ltd..
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
