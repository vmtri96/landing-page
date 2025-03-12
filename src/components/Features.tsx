export default function Features() {
  const features = [
    {
      title: 'Phát triển phần mềm doanh nghiệp',
      description: 'Chúng tôi cung cấp các giải pháp phần mềm doanh nghiệp tùy chỉnh, bao gồm hệ thống quản lý quan hệ khách hàng (CRM), quản lý tài nguyên doanh nghiệp (ERP), phần mềm quản lý bán hàng, quản lý nhân sự và các nền tảng tự động hóa quy trình kinh doanh.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phát triển ứng dụng web và di động',
      description: 'Với đội ngũ giàu kinh nghiệm, chúng tôi phát triển các ứng dụng web và mobile hiện đại, sử dụng các công nghệ tiên tiến như ReactJS, Angular, VueJS cho Front-End và Spring Boot, NestJS, Django cho Back-End. Đồng thời, chúng tôi cũng phát triển ứng dụng di động Native (Android, iOS) và Cross-platform (Flutter, React Native).',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Thương mại điện tử & Fintech',
      description: 'Chúng tôi phát triển các nền tảng thương mại điện tử thông minh, tích hợp công nghệ AI để cá nhân hóa trải nghiệm mua sắm, tối ưu quy trình thanh toán và quản lý chuỗi cung ứng. Ngoài ra, chúng tôi cũng cung cấp các giải pháp Fintech như ví điện tử, hệ thống thanh toán trực tuyến.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tại Sao Chọn Chúng Tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp các giải pháp sáng tạo giúp thúc đẩy chuyển đổi số và tăng trưởng kinh doanh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-red-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
