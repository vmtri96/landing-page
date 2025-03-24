import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartcode Solutions - Gói Phát Triển Phần Mềm Theo Chức Năng & Màn Hình | Linh Hoạt & Tối Ưu",
  description: "Cung cấp các gói phát triển phần mềm theo số lượng chức năng & màn hình, phù hợp với startup, doanh nghiệp vừa và lớn. Linh hoạt, tối ưu chi phí, công nghệ hiện đại. Liên hệ ngay!",
};

export default function SoftwareDevelopmentPackages() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 from-blue-50 to-white container mx-auto px-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-6">Gói Phát Triển Phần Mềm Theo Số Lượng Chức Năng & Màn Hình</h1>
          <p className="mb-8">
            Để đáp ứng nhu cầu linh hoạt của khách hàng, chúng tôi cung cấp các gói phát triển phần mềm linh hoạt theo số lượng chức năng và màn hình, giúp doanh nghiệp dễ dàng lựa chọn giải pháp phù hợp với ngân sách và yêu cầu cụ thể.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Các gói dịch vụ chúng tôi cung cấp</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Gói Cơ Bản (2 - 4 tuần)</strong>: Chức năng: 5 - 10, Màn hình: 5 - 10. Phù hợp cho: Startup, dự án MVP cần kiểm chứng ý tưởng nhanh.</li>
            <li><strong>Gói Tiêu Chuẩn (4 - 8 tuần)</strong>: Chức năng: 10 - 20, Màn hình: 10 - 20. Phù hợp cho: Doanh nghiệp vừa và nhỏ, cần ứng dụng phần mềm để tối ưu quy trình.</li>
            <li><strong>Gói Nâng Cao (8 - 12 tuần)</strong>: Chức năng: 20 - 40, Màn hình: 20 - 40. Phù hợp cho: Doanh nghiệp lớn, hệ thống quản lý nội bộ hoặc phần mềm phức tạp.</li>
            <li><strong>Gói Tùy Chỉnh (Thời gian theo yêu cầu)</strong>: Chức năng: Không giới hạn, Màn hình: Theo yêu cầu. Phù hợp cho: Các giải pháp phần mềm đặc thù, cần tích hợp công nghệ tiên tiến.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Tại sao chọn chúng tôi?</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Linh hoạt theo nhu cầu</strong>: Chọn gói dịch vụ phù hợp với quy mô dự án.</li>
            <li><strong>Công nghệ hiện đại</strong>: Sử dụng các nền tảng tiên tiến như React, Angular, Vue, Spring Boot, NestJS, Flutter, Kotlin.</li>
            <li><strong>Tối ưu thời gian & ngân sách</strong>: Quy trình phát triển rõ ràng, giúp tối ưu chi phí và tiến độ.</li>
            <li><strong>Bảo trì & hỗ trợ dài hạn</strong>: Hỗ trợ cập nhật, nâng cấp khi cần thiết.</li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <p className="text-lg font-semibold">Hãy chọn gói dịch vụ phù hợp và bắt đầu xây dựng phần mềm của bạn ngay hôm nay!</p>
          <p className="text-lg font-semibold">Liên hệ để nhận tư vấn miễn phí! 🚀</p>
        </section>

        <section className="mt-12">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  );
}