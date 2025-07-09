"use client";
import Link from "next/link";

const ClientPathway = () => {
  const pathwaySteps = [
    {
      id: "01",
      title: "Khám phá nhu cầu",
      description:
        "Tìm hiểu chi tiết về yêu cầu và mục tiêu kinh doanh của bạn.",
    },
    {
      id: "02",
      title: "Thiết kế giải pháp",
      description:
        "Phát triển giải pháp phù hợp với nhu cầu và ngân sách của bạn.",
    },
    {
      id: "03",
      title: "Triển khai & hỗ trợ",
      description: "Triển khai giải pháp và cung cấp hỗ trợ liên tục.",
    },
  ];

  // Check icon component
  const CheckIcon = () => (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left side - Text content (1/3) */}
          <div className="lg:w-1/3">
            <div className="lg:sticky top-8">
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-2">
                CÁCH CHÚNG TÔI LÀM VIỆC
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Con đường tốt nhất <br />
                đến với khách hàng.
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Chúng tôi tạo ra các giải pháp công nghệ hiệu quả, giúp doanh
                nghiệp của bạn phát triển mạnh mẽ trong thời đại số.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Tư vấn chuyên nghiệp
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Giải pháp tùy chỉnh
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <p className="text-gray-700 font-medium">Hỗ trợ liên tục</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Timeline with cards (2/3) */}
          <div className="lg:w-2/3 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden lg:block"></div>

            {/* Timeline steps */}
            <div className="relative space-y-24">
              {/* Step 1 - Right side */}
              <div className="flex flex-col lg:flex-row items-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center z-10">
                    <span className="text-blue-600 font-bold">
                      {pathwaySteps[0].id}
                    </span>
                  </div>
                </div>

                {/* Empty space for left side */}
                <div className="lg:w-1/2 hidden lg:block"></div>

                {/* Card on right side */}
                <div className="lg:w-1/2 w-full">
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 hover:bg-gray-900 group transition-all duration-300 ml-0 lg:ml-8">
                    <h3 className="font-semibold text-gray-900 group-hover:text-white text-lg mb-2 transition-colors duration-300">
                      {pathwaySteps[0].title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                      {pathwaySteps[0].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 - Left side */}
              <div className="flex flex-col lg:flex-row items-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center z-10">
                    <span className="text-blue-600 font-bold">
                      {pathwaySteps[1].id}
                    </span>
                  </div>
                </div>

                {/* Card on left side */}
                <div className="lg:w-1/2 w-full">
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 hover:bg-gray-900 group transition-all duration-300 mr-0 lg:mr-8">
                    <h3 className="font-semibold text-gray-900 group-hover:text-white text-lg mb-2 transition-colors duration-300">
                      {pathwaySteps[1].title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                      {pathwaySteps[1].description}
                    </p>
                  </div>
                </div>

                {/* Empty space for right side */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </div>

              {/* Step 3 - Right side */}
              <div className="flex flex-col lg:flex-row items-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center z-10">
                    <span className="text-blue-600 font-bold">
                      {pathwaySteps[2].id}
                    </span>
                  </div>
                </div>

                {/* Empty space for left side */}
                <div className="lg:w-1/2 hidden lg:block"></div>

                {/* Card on right side */}
                <div className="lg:w-1/2 w-full">
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 hover:bg-gray-900 group transition-all duration-300 ml-0 lg:ml-8">
                    <h3 className="font-semibold text-gray-900 group-hover:text-white text-lg mb-2 transition-colors duration-300">
                      {pathwaySteps[2].title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                      {pathwaySteps[2].description}
                    </p>
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

export default ClientPathway;
