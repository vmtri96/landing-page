"use client";

import { useState } from "react";
import {
  FiHeadphones,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column - Contact Form (2/3) */}
          <div className="lg:w-2/3">
            <div className="bg-[#F3F6FD] rounded-lg p-10 lg:p-16">
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-2">
                LIÊN HỆ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
                Hãy liên hệ với chúng tôi
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập địa chỉ email của bạn"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nội dung
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập nội dung tin nhắn của bạn"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                  </button>
                </div>

                {submitSuccess && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-md">
                    Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ liên
                    hệ lại trong thời gian sớm nhất!
                  </div>
                )}

                {submitError && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-md">
                    Đã có lỗi xảy ra. Vui lòng thử lại sau hoặc liên hệ trực
                    tiếp qua số điện thoại.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right column - Contact Info (1/3) */}
          <div className="lg:w-1/3">
            <div className="bg-[#F3F6FD] rounded-lg p-10 lg:p-16 h-full flex flex-col">
              {/* Contact Information */}
              <div className="mb-8 flex-1">
                <div className="flex flex-col items-start">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-3">
                    <FiHeadphones className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thông tin liên hệ
                  </h3>
                </div>

                <div className="space-y-1 mt-3">
                  <p className="text-gray-700">0973 023 736</p>
                  <p className="text-gray-700">smartcodesolutions@gmail.com</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Social Media */}
              <div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                      <FiFacebook className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700">Facebook</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                      <FiLinkedin className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700">LinkedIn</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                      <FiInstagram className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700">Instagram</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                      <FaTiktok className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700">TikTok</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
