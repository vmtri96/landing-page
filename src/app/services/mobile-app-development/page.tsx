import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartcode Solutions - Dịch Vụ Phát Triển Ứng Dụng Di Động | Android & iOS App Development",
  description: "Phát triển ứng dụng mobile chuyên nghiệp cho Android & iOS, tối ưu UX/UI, bảo mật cao. Giải pháp mobile app cho thương mại điện tử, đặt lịch, quản lý doanh nghiệp. Liên hệ ngay!",
};

export default function MobileAppDevelopment() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 from-blue-50 to-white container mx-auto px-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-6">Dịch vụ Phát triển Ứng Dụng Di Động (Mobile App)</h1>
          <p className="mb-8">
            Chúng tôi cung cấp giải pháp phát triển ứng dụng di động chuyên nghiệp trên cả Android và iOS, giúp doanh nghiệp tiếp cận khách hàng dễ dàng, tối ưu hóa quy trình làm việc và nâng cao trải nghiệm người dùng.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Các loại ứng dụng chúng tôi phát triển</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Ứng dụng thương mại điện tử, mua sắm trực tuyến</strong>: Xây dựng ứng dụng bán hàng chuyên nghiệp, hỗ trợ giỏ hàng, thanh toán trực tuyến, tích hợp quản lý đơn hàng, kho hàng và vận chuyển. Tối ưu trải nghiệm người dùng trên cả nền tảng Android & iOS.</li>
            <li><strong>Ứng dụng đặt lịch, dịch vụ khách hàng, đặt vé</strong>: Hệ thống đặt lịch hẹn, đặt chỗ cho các lĩnh vực như làm đẹp, y tế, giáo dục, giải trí. Tích hợp thông báo nhắc nhở, thanh toán online, quản lý khách hàng.</li>
            <li><strong>Ứng dụng quản lý nội bộ doanh nghiệp, giao việc</strong>: Phần mềm hỗ trợ quản lý công việc, nhân sự, dự án, giao việc và giám sát tiến độ. Tích hợp AI, chatbot hỗ trợ, đồng bộ dữ liệu với hệ thống ERP, CRM.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Tại sao chọn chúng tôi?</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Công nghệ hiện đại</strong>: Sử dụng React Native, Flutter, Swift, Kotlin để tối ưu hiệu suất và tiết kiệm chi phí phát triển.</li>
            <li><strong>Tối ưu UX/UI</strong>: Thiết kế trực quan, mượt mà, nâng cao trải nghiệm người dùng.</li>
            <li><strong>Bảo mật cao</strong>: Ứng dụng các tiêu chuẩn bảo mật dữ liệu tiên tiến.</li>
            <li><strong>Hỗ trợ dài hạn</strong>: Cung cấp dịch vụ bảo trì, nâng cấp và tối ưu ứng dụng sau khi triển khai.</li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <p className="text-lg font-semibold">Hãy để chúng tôi giúp bạn xây dựng ứng dụng di động đột phá, mang lại trải nghiệm tốt nhất cho khách hàng!</p>
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