"use client";
import Link from "next/link";
import {
  FiServer,
  FiMonitor,
  FiSmartphone,
  FiDatabase,
  FiShield,
} from "react-icons/fi";

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      icon: <FiServer className="w-6 h-6" />,
      title: "Quản trị hệ thống",
      description: "Quản lý và tối ưu hóa hệ thống CNTT của doanh nghiệp",
    },
    {
      id: 2,
      icon: <FiMonitor className="w-6 h-6" />,
      title: "Thiết kế website",
      description:
        "Thiết kế website chuyên nghiệp, tối ưu SEO và trải nghiệm người dùng",
    },
    {
      id: 3,
      icon: <FiSmartphone className="w-6 h-6" />,
      title: "Phát triển ứng dụng",
      description: "Phát triển ứng dụng di động đa nền tảng iOS và Android",
    },
    {
      id: 4,
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Quản trị dữ liệu",
      description: "Quản lý, phân tích và tối ưu hóa dữ liệu doanh nghiệp",
    },
    {
      id: 5,
      icon: <FiShield className="w-6 h-6" />,
      title: "Bảo mật CNTT",
      description:
        "Giải pháp bảo mật toàn diện cho hệ thống công nghệ thông tin",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-600 mb-2">
            DỊCH VỤ CỦA CHÚNG TÔI
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cung cấp đầy đủ các dịch vụ CNTT chuyên nghiệp.
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Chúng tôi cung cấp các giải pháp CNTT toàn diện, từ thiết kế website
            đến phát triển phần mềm tùy chỉnh, giúp doanh nghiệp của bạn tối ưu
            hóa quy trình và tăng trưởng trong kỷ nguyên số.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#1C426B] hover:bg-[#153555] transition-colors duration-300"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
