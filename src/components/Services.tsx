import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Dịch vụ Phát triển Phần mềm Tùy Chỉnh',
      description: `Chúng tôi cung cấp giải pháp phần mềm theo yêu cầu, giúp doanh nghiệp tự động hóa quy trình, nâng cao hiệu suất làm việc và tối ưu hóa quản lý.`,
      items: [
        "Phần mềm quản lý doanh nghiệp (ERP, CRM, HRM, POS,...)",
        "Hệ thống quản lý kho, quản lý đơn hàng, chuỗi cung ứng",
        "Ứng dụng hỗ trợ chăm sóc khách hàng (Customer Support, Ticketing System)",
        "Phần mềm chuyên ngành theo yêu cầu",
      ],
      image: '/images/custom-software.svg',
      path: '/services/custom-software-development'
    },
    {
      title: 'Dịch vụ Phát triển Website & Ứng dụng Web',
      description: 'Chúng tôi thiết kế và phát triển website, ứng dụng web chuyên nghiệp, tối ưu SEO, tốc độ và bảo mật.',
      items: [
        "Website doanh nghiệp, giới thiệu sản phẩm, dịch vụ",
        "Website thương mại điện tử, marketplace, đa kênh",
        "Web App quản lý nội bộ, quản lý nhân sự, bán hàng",
        "Ứng dụng web tích hợp API, thanh toán trực tuyến"
      ],
      image: '/images/digital-transform.svg',
      path: '/services/web-development'
    },
    {
      title: 'Dịch vụ Phát triển Ứng dụng Di Động (Mobile App)',
      description: 'Phát triển ứng dụng mobile cho Android và iOS với công nghệ tiên tiến',
      items: [
        "Ứng dụng thương mại điện tử, mua sắm trực tuyến",
        "Ứng dụng đặt lịch, dịch vụ khách hàng, đặt vé",
        "Ứng dụng quản lý nội bộ doanh nghiệp, giao việc",

      ],
      image: '/images/cloud-migration.svg',
      path: '/services/mobile-app-development'
    },
    {
      title: 'Dịch vụ Bảo trì & Nâng cấp Phần mềm',
      description: 'Chúng tôi cung cấp dịch vụ bảo trì và nâng cấp phần mềm để đảm bảo hệ thống luôn hoạt động ổn định',
      items: [
        "Cập nhật tính năng, tối ưu hiệu suất",
        "Sửa lỗi, nâng cấp giao diện người dùng",
      ],
      image: '/images/cloud-migration.svg',
      path: '/services/software-maintenance'
    },
    {
      title: 'Gói Phát Triển Phần Mềm Theo Số Lượng Chức Năng & Màn Hình',
      description: 'Để đáp ứng nhu cầu linh hoạt của khách hàng, chúng tôi cung cấp các gói phát triển phần mềm theo số lượng chức năng và màn hình',
      items: [
        {
          title: "Gói Cơ Bản",
          functions: "5 - 10 chức năng",
          screens: "5 - 10 màn hình",
          time: "2 - 4 tuần",
          targetAudience: "Startup, MVP"
        },
        {
          title: "Gói Tiêu Chuẩn",
          functions: "10 - 20 chức năng",
          screens: "10 - 20 màn hình",
          time: "4 - 8 tuần",
          targetAudience: "Doanh nghiệp vừa và nhỏ"
        },
        {
          title: "Gói Nâng Cao",
          functions: "20 - 40 chức năng",
          screens: "20 - 40 màn hình",
          time: "8 - 12 tuần",
          targetAudience: "Doanh nghiệp lớn, hệ thống nội bộ"
        },
        {
          title: "Gói Tùy Chỉnh",
          functions: "Theo yêu cầu",
          screens: "Theo yêu cầu",
          time: "Theo yêu cầu",
          targetAudience: "Giải pháp chuyên biệt"
        }
      ],
      image: '/images/cloud-migration.svg',
      path: '/services/software-development-packages'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Các giải pháp toàn diện để thúc đẩy thành công kỹ thuật số của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              <Link href={service?.path} className="mt-6 text-red-500 font-semibold hover:text-red-600 transition-colors cursor-pointer">
                Xem thêm →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
