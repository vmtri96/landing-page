import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientPathway from "@/components/ClientPathway";

export default function ClientPathwayPage() {
  return (
    <div>
      <Header />
      <main>
        <ClientPathway />

        <section id="client-pathway-details" className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Chi tiết lộ trình hợp tác
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mỗi giai đoạn đều có tiêu chí rõ ràng giúp hai bên đồng bộ mục
                tiêu, rút ngắn thời gian triển khai và tối ưu chi phí.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  01. Khám phá nhu cầu
                </h3>
                <p className="text-gray-600 mb-3">
                  Hiểu rõ bài toán và kỳ vọng để định hình phạm vi và tiêu chí
                  thành công.
                </p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>Phỏng vấn stakeholders, thu thập yêu cầu</li>
                  <li>Xác định personas, user journeys</li>
                  <li>Phạm vi (scope), rủi ro, timeline dự kiến</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  02. Thiết kế giải pháp
                </h3>
                <p className="text-gray-600 mb-3">
                  Đề xuất kiến trúc, luồng nghiệp vụ và giao diện phù hợp ngân
                  sách.
                </p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>Kiến trúc hệ thống và tích hợp</li>
                  <li>Wireframe, prototype tương tác</li>
                  <li>Ước lượng chi phí, kế hoạch sprint</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  03. Triển khai & hỗ trợ
                </h3>
                <p className="text-gray-600 mb-3">
                  Phát triển theo sprint, kiểm thử và bàn giao, kèm theo hỗ trợ
                  vận hành.
                </p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>CI/CD, code review, kiểm thử tự động</li>
                  <li>Demo cuối sprint, nghiệm thu từng phần</li>
                  <li>Bàn giao, tài liệu và SLA hỗ trợ</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cam kết đồng hành dài hạn
              </h3>
              <p className="text-gray-700">
                Chúng tôi coi sự thành công của dự án là mục tiêu chung. Đội ngũ
                luôn theo sát, phản hồi nhanh và chủ động đề xuất tối ưu để hệ
                thống vận hành ổn định, mở rộng dễ dàng.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
