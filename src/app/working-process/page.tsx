import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkingProcess from "@/components/WorkingProcess";
import Breadcrumb from "@/components/Breadcrumb";

export default function WorkingProcessPage() {
  return (
    <div>
      <Header />
      <Breadcrumb />
      <main>
        <WorkingProcess />

        <section id="working-process-details" className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Chi tiết từng giai đoạn
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quy trình giúp đội ngũ và khách hàng đồng bộ mục tiêu, giảm rủi
                ro, kiểm soát tiến độ và tối ưu chi phí trong suốt vòng đời dự
                án.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Phân tích
                </h3>
                <p className="text-gray-600 mb-3">
                  Thu thập yêu cầu, phân tích nghiệp vụ, xác định phạm vi và mục
                  tiêu.
                </p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>Workshop với stakeholders</li>
                  <li>Định nghĩa personas & user journeys</li>
                  <li>Phạm vi (scope), rủi ro và tiêu chí thành công</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thiết kế UI/UX
                </h3>
                <p className="text-gray-600 mb-3">
                  Lên wireframe, flow, style guide và prototype theo trải nghiệm
                  người dùng.
                </p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>Wireframe, flow & kiến trúc thông tin</li>
                  <li>Design system, thành phần UI</li>
                  <li>Prototype tương tác cho kiểm thử</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Demo thiết kế
                </h3>
                <p className="text-gray-600 mb-3">
                  Trình bày prototype, thu thập phản hồi, tinh chỉnh trước khi
                  phát triển.
                </p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>Demo trực tiếp/ghi hình</li>
                  <li>Checklist chấp nhận (acceptance criteria)</li>
                  <li>Lộ trình và kế hoạch sprint</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lập trình
                </h3>
                <p className="text-gray-600 mb-3">
                  Phát triển tính năng theo sprint, code review, kiểm thử tự
                  động.
                </p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>CI/CD, code review, tiêu chuẩn mã nguồn</li>
                  <li>Unit/E2E test, theo dõi chất lượng</li>
                  <li>Demo cuối sprint, cập nhật backlog</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bàn giao
                </h3>
                <p className="text-gray-600 mb-3">
                  Triển khai môi trường production, hướng dẫn sử dụng và tài
                  liệu kỹ thuật.
                </p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>Checklist go-live & rollback plan</li>
                  <li>Training người dùng & admin</li>
                  <li>Tài liệu hệ thống & bảo trì</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bảo trì
                </h3>
                <p className="text-gray-600 mb-3">
                  Theo dõi vận hành, tối ưu hiệu năng, xử lý sự cố và phát triển
                  tiếp.
                </p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>SLA hỗ trợ và giám sát</li>
                  <li>Backup, bảo mật và nâng cấp</li>
                  <li>Lộ trình tính năng giai đoạn 2+</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cách chúng tôi đảm bảo thành công dự án
              </h3>
              <p className="text-gray-700">
                Chúng tôi áp dụng quy trình tinh gọn, đo lường minh bạch và giao
                tiếp thường xuyên với khách hàng. Mỗi giai đoạn đều có tiêu chí
                đánh giá rõ ràng để đảm bảo kết quả đúng chất lượng, đúng thời
                hạn và đúng ngân sách.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
