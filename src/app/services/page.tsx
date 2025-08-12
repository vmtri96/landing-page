"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import servicesData from "@/components/Services/data.json";
import { useMemo, useState } from "react";

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
  }, [activeService, activeServiceIndex]);

  return (
    <div>
      <Header />
      <main>
        <Services onTabChange={setActiveServiceIndex} />

        <section id="services-comparison" className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Bảng so sánh theo dịch vụ đang chọn
            </h2>

            {activeService && (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {activeService.name}
                </h3>

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
      </main>
      <Footer />
    </div>
  );
}
