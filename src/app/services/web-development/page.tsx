import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartcode Solutions - Dịch Vụ Thiết Kế Website & Phát Triển Ứng Dụng Web | Tối Ưu SEO & Bảo Mật",
  description: "Chuyên thiết kế website, phát triển ứng dụng web chuyên nghiệp, tối ưu SEO, tốc độ và bảo mật. Hỗ trợ doanh nghiệp nâng cao hiệu suất, tăng trưởng bền vững. Liên hệ ngay để được tư vấn!",
};

export default function WebDevelopment() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 from-blue-50 to-white container mx-auto px-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-6">Dịch vụ Phát triển Website & Ứng dụng Web</h1>
          <p className="mb-8">
            Chúng tôi cung cấp giải pháp thiết kế & phát triển website, ứng dụng web chuyên nghiệp, giúp doanh nghiệp tối ưu hiệu suất, tăng cường trải nghiệm người dùng, nâng cao khả năng cạnh tranh và chuyển đổi số.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Chúng tôi cung cấp các giải pháp:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Website doanh nghiệp</strong>: Giới thiệu sản phẩm, dịch vụ, xây dựng thương hiệu trực tuyến chuyên nghiệp, tối ưu SEO giúp tiếp cận khách hàng dễ dàng.</li>
            <li><strong>Website thương mại điện tử</strong>: Phát triển website bán hàng, marketplace đa kênh, tích hợp thanh toán trực tuyến, hỗ trợ quản lý đơn hàng, khách hàng, kho hàng.</li>
            <li><strong>Ứng dụng Web quản lý nội bộ</strong>: Hệ thống hỗ trợ quản lý nhân sự, bán hàng, tài chính, quy trình làm việc giúp doanh nghiệp tối ưu vận hành.</li>
            <li><strong>Ứng dụng Web tích hợp API</strong>: Xây dựng các nền tảng kết nối dữ liệu, tích hợp API thanh toán, vận chuyển, AI, chatbot, phân tích dữ liệu để nâng cao hiệu suất.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Tại sao chọn chúng tôi?</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Thiết kế chuẩn UX/UI</strong>: Giao diện trực quan, tối ưu trải nghiệm người dùng trên mọi thiết bị.</li>
            <li><strong>Chuẩn SEO & tốc độ tối ưu</strong>: Website tải nhanh, giúp tăng thứ hạng trên Google và tiếp cận khách hàng hiệu quả.</li>
            <li><strong>Bảo mật cao</strong>: Ứng dụng các tiêu chuẩn bảo mật tiên tiến, bảo vệ dữ liệu và giao dịch trực tuyến.</li>
            <li><strong>Công nghệ hiện đại</strong>: Sử dụng các nền tảng tiên tiến như React, Vue, Next.js, NestJS, Spring Boot để đảm bảo hiệu suất cao.</li>
            <li><strong>Hỗ trợ & bảo trì lâu dài</strong>: Cam kết đồng hành cùng doanh nghiệp, cập nhật và nâng cấp hệ thống liên tục.</li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <p className="text-lg font-semibold">Hãy để chúng tôi giúp bạn sở hữu một website/ứng dụng web chuyên nghiệp và phát triển doanh nghiệp hiệu quả hơn!</p>
          <p className="text-lg font-semibold">Liên hệ ngay để nhận tư vấn miễn phí! 🚀</p>
        </section>

        <section className="mt-12">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  );
}