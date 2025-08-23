"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";
import servicesData from "@/components/Services/data.json";
import { useMemo, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ServicesPage() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const activeService = servicesData[activeServiceIndex];
  const allFeatures = useMemo(() => {
    if (!activeService) return [];
    return Array.from(
      new Set(
        activeService.packages.flatMap((pkg) =>
          pkg.contents.map((c) => c.title)
        )
      )
    );
  }, [activeService]);

  const faqData = [
    {
      question: "Thời gian phát triển một website/ứng dụng mất bao lâu?",
      answer:
        "Thời gian phát triển phụ thuộc vào độ phức tạp của dự án. Website đơn giản: 2-4 tuần, website phức tạp: 1-3 tháng, ứng dụng di động: 2-6 tháng. Chúng tôi sẽ cung cấp timeline chi tiết trong báo giá.",
    },
    {
      question: "Chi phí phát triển phần mềm là bao nhiêu?",
      answer:
        "Chi phí phụ thuộc vào yêu cầu cụ thể của dự án. Chúng tôi cung cấp báo giá miễn phí và minh bạch sau khi phân tích yêu cầu. Có các gói dịch vụ từ cơ bản đến cao cấp phù hợp với mọi ngân sách.",
    },
    {
      question: "Có bảo hành và hỗ trợ sau khi bàn giao không?",
      answer:
        "Có, chúng tôi cung cấp bảo hành 12 tháng và hỗ trợ kỹ thuật trong giờ làm việc. Có thể cung cấp gói SLA 24/7 theo yêu cầu. Chúng tôi cam kết đồng hành dài hạn với khách hàng.",
    },
    {
      question: "Có thể tùy chỉnh theo yêu cầu riêng không?",
      answer:
        "Hoàn toàn có thể! Chúng tôi chuyên về phát triển tùy chỉnh theo yêu cầu cụ thể của từng doanh nghiệp. Mỗi dự án đều được thiết kế và phát triển độc đáo, phù hợp với quy trình nghiệp vụ của khách hàng.",
    },
    {
      question: "Có cung cấp dịch vụ bảo trì và nâng cấp không?",
      answer:
        "Có, chúng tôi cung cấp đầy đủ dịch vụ bảo trì, cập nhật và nâng cấp hệ thống. Bao gồm: bảo trì định kỳ, cập nhật bảo mật, thêm tính năng mới, tối ưu hiệu năng và hỗ trợ kỹ thuật.",
    },
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div>
      <StructuredData type="faq" data={{ faqs: faqData }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Breadcrumb />
      <main>
        <Services onTabChange={setActiveServiceIndex} />

        <section id="services-comparison" className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Bảng So Sánh Dịch Vụ Phát Triển Phần Mềm & Website
            </h1>

            {activeService && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {activeService.name}
                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-[320px]">
                          Tính năng
                        </th>
                        {activeService.packages.map((pkg, idx) => (
                          <th
                            key={idx}
                            className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                          >
                            {pkg.title}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {allFeatures.map((feature, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-800 align-top">
                            {feature}
                          </td>
                          {activeService.packages.map((_, colIdx) => {
                            const availableUpToThisPackage =
                              activeService.packages
                                .slice(0, colIdx + 1)
                                .some((p) =>
                                  p.contents.some(
                                    (c) => c.title === feature && c.check
                                  )
                                );

                            return (
                              <td
                                key={colIdx}
                                className="px-4 py-3 text-center align-top"
                              >
                                {availableUpToThisPackage ? (
                                  <svg
                                    className="w-5 h-5 inline text-green-500"
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
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>

        <FAQ
          title="Câu Hỏi Thường Gặp Về Dịch Vụ Phát Triển Phần Mềm & Website"
          faqs={faqData}
        />
      </main>
      <Footer />
    </div>
  );
}
