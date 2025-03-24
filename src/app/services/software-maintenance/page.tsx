import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartcode Solutions - Dịch Vụ Bảo Trì & Nâng Cấp Phần Mềm | Tối Ưu & Cập Nhật Tính Năng",
  description: "Dịch vụ bảo trì và nâng cấp phần mềm giúp hệ thống hoạt động ổn định, tối ưu hiệu suất, cập nhật tính năng mới và nâng cấp giao diện. Liên hệ ngay để được hỗ trợ!",
};

export default function SoftwareMaintenance() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 from-blue-50 to-white container mx-auto px-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-6">Dịch vụ Bảo trì & Nâng cấp Phần mềm</h1>
          <p className="mb-8">
            Trong bối cảnh công nghệ phát triển nhanh chóng, phần mềm cần được bảo trì và nâng cấp thường xuyên để đảm bảo hiệu suất, bảo mật và khả năng mở rộng. Chúng tôi cung cấp dịch vụ bảo trì và nâng cấp phần mềm chuyên nghiệp, giúp doanh nghiệp luôn sở hữu một hệ thống hoạt động ổn định, tối ưu và đáp ứng kịp thời nhu cầu thị trường.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Các dịch vụ chúng tôi cung cấp</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Cập nhật tính năng, tối ưu hiệu suất</strong>: Thêm tính năng mới theo yêu cầu để đáp ứng nhu cầu kinh doanh. Cải thiện tốc độ xử lý, tối ưu hóa hệ thống để đảm bảo hoạt động mượt mà.</li>
            <li><strong>Sửa lỗi, nâng cấp giao diện người dùng</strong>: Khắc phục lỗi phần mềm, vá lỗ hổng bảo mật để đảm bảo an toàn dữ liệu. Thiết kế lại giao diện theo tiêu chuẩn UX/UI hiện đại, giúp cải thiện trải nghiệm người dùng.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Tại sao chọn chúng tôi?</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Giải pháp linh hoạt</strong>: Dịch vụ bảo trì phù hợp với mọi loại phần mềm, từ ứng dụng web, mobile đến hệ thống doanh nghiệp.</li>
            <li><strong>Đội ngũ chuyên nghiệp</strong>: Chúng tôi có kinh nghiệm với nhiều công nghệ như Java, .NET, PHP, React, Angular, Flutter, v.v.</li>
            <li><strong>Bảo mật tối đa</strong>: Cam kết tuân thủ các tiêu chuẩn bảo mật nghiêm ngặt để bảo vệ dữ liệu của bạn.</li>
            <li><strong>Hỗ trợ nhanh chóng</strong>: Đội ngũ sẵn sàng hỗ trợ 24/7, xử lý sự cố kịp thời để không ảnh hưởng đến hoạt động kinh doanh.</li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <p className="text-lg font-semibold">Hãy để chúng tôi giúp phần mềm của bạn luôn vận hành mượt mà, bảo mật và phù hợp với xu hướng công nghệ mới nhất!</p>
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