"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import servicesData from "./data.json";
import { FiPackage, FiBox, FiLayers, FiStar } from "react-icons/fi";

const Services = ({ onTabChange } = {}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  // Icons for each package type
  const packageIcons = {
    "GÓI CƠ BẢN": <FiPackage className="w-8 h-8" />,
    "GÓI TRUNG CẤP": <FiBox className="w-8 h-8" />,
    "GÓI CAO CẤP": <FiLayers className="w-8 h-8" />,
    "GÓI TUỲ CHỌN": <FiStar className="w-8 h-8" />,
  };

  useEffect(() => {
    // Reset visible cards when tab changes
    setVisibleCards([]);

    // Initialize refs array
    cardsRef.current = cardsRef.current.slice(
      0,
      servicesData[activeTab].packages.length
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = cardsRef.current.findIndex(
              (ref) => ref === entry.target
            );
            if (cardIndex !== -1) {
              setVisibleCards((prev) => {
                if (!prev.includes(cardIndex)) {
                  return [...prev, cardIndex];
                }
                return prev;
              });
            }
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the card is visible
    );

    // Observe all card elements
    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeTab]);

  // Function to set ref for each card
  const setCardRef = (element, index) => {
    cardsRef.current[index] = element;
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dịch vụ
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tham khảo bảng dịch vụ của chúng tôi để tìm hiểu các gói dịch vụ đa
            dạng, từ cơ bản đến nâng cao, phù hợp với mọi nhu cầu và ngân sách.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl p-2 mb-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  if (typeof onTabChange === "function") {
                    onTabChange(index);
                  }
                }}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === index
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData[activeTab].packages.map((packageItem, index) => (
            <div
              key={index}
              ref={(el) => setCardRef(el, index)}
              className={`bg-white rounded-lg shadow-lg shadow-gray-200 hover:shadow-2xl hover:shadow-gray-300 transition-all duration-500 overflow-hidden transform ${
                visibleCards.includes(index)
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="p-6">
                {/* Header with contact button */}
                <div className="flex justify-end mb-6">
                  <Link
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-[#1C426B] hover:bg-[#153555] transition-colors duration-200"
                  >
                    Liên hệ
                  </Link>
                </div>

                {/* Icon and title */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-lg mb-3">
                    {packageIcons[packageItem.title]}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {packageItem.title}
                  </h3>
                </div>

                {/* Package features */}
                <div className="space-y-3">
                  {packageItem.contents.map((content, contentIndex) => (
                    <div key={contentIndex} className="flex items-start">
                      <div
                        className={`flex-shrink-0 mt-1 ${
                          content.check ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {content.check ? (
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="ml-2 text-sm text-gray-600">
                        {content.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
