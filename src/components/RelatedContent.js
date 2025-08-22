import Link from "next/link";

const RelatedContent = ({ currentPage, relatedPages }) => {
  const pageConfigs = {
    "/about": {
      title: "Khám phá thêm về chúng tôi",
      description:
        "Tìm hiểu thêm về dịch vụ và quy trình làm việc của Smart Code Digital Solutions",
    },
    "/services": {
      title: "Các dịch vụ khác",
      description:
        "Khám phá đầy đủ các dịch vụ phát triển phần mềm của chúng tôi",
    },
    "/contact": {
      title: "Thông tin liên quan",
      description:
        "Tìm hiểu thêm về quy trình làm việc và cách chúng tôi hỗ trợ bạn",
    },
    "/working-process": {
      title: "Tìm hiểu thêm",
      description:
        "Khám phá các thông tin khác về dịch vụ và quy trình của chúng tôi",
    },
    "/client-pathway": {
      title: "Thông tin bổ sung",
      description: "Tìm hiểu thêm về dịch vụ và cách chúng tôi làm việc",
    },
    "/privacy-policy": {
      title: "Thông tin pháp lý",
      description:
        "Tìm hiểu thêm về các điều khoản và chính sách của chúng tôi",
    },
    "/terms-of-service": {
      title: "Thông tin pháp lý",
      description:
        "Tìm hiểu thêm về các điều khoản và chính sách của chúng tôi",
    },
  };

  const config = pageConfigs[currentPage] || {
    title: "Nội dung liên quan",
    description: "Khám phá thêm thông tin hữu ích",
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {config.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {config.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="group block bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {page.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
