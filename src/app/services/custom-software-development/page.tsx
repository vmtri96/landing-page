import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartcode Solutions - Dịch Vụ Phát Triển Phần Mềm Tùy Chỉnh | Giải Pháp Theo Yêu Cầu",
  description: "Cung cấp dịch vụ phát triển phần mềm tùy chỉnh theo yêu cầu, giúp doanh nghiệp tối ưu hóa quy trình, nâng cao hiệu suất và quản lý hiệu quả. Liên hệ ngay để nhận tư vấn miễn phí!",
};

export default function CustomSoftwareDevelopment() {

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 from-blue-50 to-white container mx-auto px-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-6">Dịch vụ Phát triển Phần mềm Tùy Chỉnh</h1>
          <p className="mb-8">
            Trong thời đại số hóa, việc sở hữu một phần mềm phù hợp với nhu cầu riêng của doanh nghiệp là yếu tố quan trọng giúp tối ưu quy trình làm việc, nâng cao hiệu suất và gia tăng lợi thế cạnh tranh. Chúng tôi cung cấp dịch vụ <strong>phát triển phần mềm tùy chỉnh</strong> theo yêu cầu, đảm bảo giải pháp công nghệ phù hợp với mô hình kinh doanh của bạn.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Giải pháp phần mềm theo yêu cầu</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Phần mềm quản lý doanh nghiệp</strong>: ERP, CRM, HRM, POS giúp tối ưu hóa quy trình vận hành, quản lý dữ liệu hiệu quả và cải thiện trải nghiệm khách hàng.</li>
            <li><strong>Hệ thống quản lý kho, đơn hàng, chuỗi cung ứng</strong>: Tích hợp công nghệ AI và IoT giúp theo dõi hàng tồn kho, tự động hóa quy trình xuất nhập hàng và quản lý logistics.</li>
            <li><strong>Ứng dụng hỗ trợ chăm sóc khách hàng</strong>: Hệ thống hỗ trợ khách hàng (Customer Support, Ticketing System) giúp doanh nghiệp xây dựng dịch vụ khách hàng chuyên nghiệp và hiệu quả.</li>
            <li><strong>Phần mềm chuyên ngành</strong>: Thiết kế và phát triển các giải pháp tùy chỉnh theo đặc thù ngành nghề, đảm bảo tối ưu hóa hoạt động kinh doanh.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Tại sao chọn chúng tôi?</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Phát triển linh hoạt</strong>: Chúng tôi lắng nghe nhu cầu của bạn và thiết kế giải pháp phần mềm phù hợp, dễ dàng mở rộng và tích hợp với hệ thống hiện có.</li>
            <li><strong>Công nghệ tiên tiến</strong>: Ứng dụng các công nghệ mới nhất như AI, Blockchain, Big Data giúp doanh nghiệp tận dụng tối đa sức mạnh của công nghệ.</li>
            <li><strong>Bảo mật và ổn định</strong>: Đảm bảo dữ liệu của bạn được bảo vệ với các tiêu chuẩn bảo mật cao nhất.</li>
            <li><strong>Hỗ trợ và bảo trì dài hạn</strong>: Chúng tôi cam kết đồng hành cùng doanh nghiệp với dịch vụ hỗ trợ kỹ thuật và nâng cấp phần mềm liên tục.</li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <p className="text-lg font-semibold">Hãy để chúng tôi giúp bạn xây dựng một giải pháp phần mềm phù hợp, đưa doanh nghiệp của bạn lên một tầm cao mới!</p>
          <p className="text-lg font-semibold">Liên hệ ngay để nhận tư vấn miễn phí! 🚀</p>
        </section>

        <section className="mt-12">
          <Contact />
        </section>
      </div>
      <Footer/>
    </main>
  )
}