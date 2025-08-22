import Link from "next/link";

const CallToAction = ({
  title = "Sẵn sàng bắt đầu dự án của bạn?",
  description = "Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết",
  primaryButton = {
    text: "Liên Hệ Ngay",
    href: "/contact",
    variant: "primary",
  },
  secondaryButton = {
    text: "Xem Dịch Vụ",
    href: "/services",
    variant: "secondary",
  },
}) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryButton.href}
              className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                primaryButton.variant === "primary"
                  ? "bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600"
              }`}
            >
              {primaryButton.text}
              <svg
                className="ml-2 w-5 h-5"
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
            </Link>

            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  secondaryButton.variant === "secondary"
                    ? "bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600"
                    : "bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                }`}
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>

          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              ⚡ Phản hồi trong 24h | 💰 Báo giá miễn phí | 🔒 Bảo mật thông tin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
