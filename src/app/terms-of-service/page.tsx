import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function TermsOfServicePage() {
  return (
    <div>
      <Header />
      <Breadcrumb />

      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Điều Khoản Dịch Vụ
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Cảm ơn bạn đã quan tâm và sử dụng dịch vụ của Smart Code Digital
              Solutions Co., Ltd. Khi sử dụng website và dịch vụ của chúng tôi,
              bạn được xem là đã đọc, hiểu và đồng ý với các điều khoản dưới
              đây.
            </p>
          </div>

          <div className="space-y-10 text-gray-800">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                1. Phạm vi áp dụng
              </h2>
              <p className="text-gray-700">
                Điều khoản này áp dụng cho toàn bộ dịch vụ do Smart Code Digital
                Solutions Co., Ltd. cung cấp, bao gồm nhưng không giới hạn: tư
                vấn, thiết kế UI/UX, phát triển website, ứng dụng, hệ thống phần
                mềm, bảo trì và các dịch vụ chuyển đổi số.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                2. Chấp nhận điều khoản
              </h2>
              <p className="text-gray-700 mb-2">
                Bằng việc sử dụng website hoặc ký kết/hình thành quan hệ dịch vụ
                với chúng tôi, bạn xác nhận đồng ý tuân thủ Điều Khoản Dịch Vụ
                này và các chính sách liên quan (bao gồm Chính Sách Bảo Mật).
              </p>
              <p className="text-gray-700">
                Nếu bạn đại diện cho tổ chức, bạn đảm bảo có đủ thẩm quyền để
                ràng buộc tổ chức với các điều khoản này.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                3. Mô tả dịch vụ và thay đổi
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Chúng tôi cung cấp dịch vụ theo phạm vi công việc (SoW) hoặc
                  đề xuất đã thống nhất.
                </li>
                <li>
                  Các thay đổi phạm vi sẽ được ghi nhận bằng phụ lục/biên bản và
                  có thể phát sinh chi phí.
                </li>
                <li>
                  Chúng tôi có thể cập nhật nội dung website, tài liệu, biểu phí
                  bất kỳ lúc nào.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                4. Phí dịch vụ và thanh toán
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Phí dịch vụ được nêu trong báo giá/hợp đồng và chưa bao gồm
                  thuế, phí chuyển khoản.
                </li>
                <li>
                  Lịch thanh toán theo mốc (ví dụ: đặt cọc, theo sprint, nghiệm
                  thu từng giai đoạn).
                </li>
                <li>
                  Thanh toán chậm có thể bị tạm dừng dịch vụ hoặc tính phí chậm
                  thanh toán.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                5. Trách nhiệm của khách hàng
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Cung cấp kịp thời thông tin, tài liệu, phản hồi và phê duyệt.
                </li>
                <li>
                  Đảm bảo tính hợp pháp của dữ liệu, nội dung cung cấp cho dự
                  án.
                </li>
                <li>
                  Hợp tác kiểm thử, nghiệm thu và vận hành theo hướng dẫn.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                6. Quyền sở hữu trí tuệ
              </h2>
              <p className="text-gray-700 mb-2">
                Trừ khi có thỏa thuận khác bằng văn bản, mã nguồn tùy chỉnh, tài
                liệu, thiết kế và sản phẩm bàn giao sau khi đã thanh toán đầy đủ
                sẽ được cấp quyền sử dụng cho khách hàng theo phạm vi đã thống
                nhất. Các thư viện nguồn mở/giấy phép bên thứ ba vẫn tuân theo
                giấy phép tương ứng và có thể yêu cầu ghi nhận.
              </p>
              <p className="text-gray-700">
                Tất cả nhãn hiệu, tên thương mại, logo của Smart Code Digital
                Solutions thuộc quyền sở hữu của chúng tôi và không được sử dụng
                khi chưa có chấp thuận.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                7. Bảo mật thông tin
              </h2>
              <p className="text-gray-700">
                Hai bên cam kết bảo mật thông tin bí mật nhận được trong quá
                trình hợp tác, chỉ sử dụng cho mục đích thực hiện dự án, trừ khi
                có yêu cầu pháp lý hoặc sự đồng ý bằng văn bản.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                8. Bảo hành, hỗ trợ và bảo trì
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Chính sách bảo hành được quy định trong hợp đồng/SoW theo thời
                  gian cụ thể.
                </li>
                <li>
                  Hỗ trợ kỹ thuật trong giờ làm việc; có thể cung cấp gói SLA
                  theo nhu cầu.
                </li>
                <li>
                  Bảo trì, nâng cấp hoặc tính năng mới được báo giá riêng nếu
                  vượt phạm vi bảo hành.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                9. Giới hạn trách nhiệm
              </h2>
              <p className="text-gray-700">
                Trong mọi trường hợp, tổng trách nhiệm của Smart Code Digital
                Solutions đối với mọi khiếu nại liên quan đến dịch vụ sẽ không
                vượt quá tổng phí dịch vụ mà khách hàng đã thanh toán trong 6
                tháng gần nhất. Chúng tôi không chịu trách nhiệm cho các thiệt
                hại gián tiếp, đặc biệt, ngẫu nhiên hoặc hệ quả.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                10. Chấm dứt
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Mỗi bên có quyền chấm dứt khi bên kia vi phạm nghiêm trọng và
                  không khắc phục trong thời hạn hợp lý.
                </li>
                <li>
                  Các nghĩa vụ về thanh toán, bảo mật, sở hữu trí tuệ tiếp tục
                  có hiệu lực sau chấm dứt.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                11. Luật áp dụng và giải quyết tranh chấp
              </h2>
              <p className="text-gray-700">
                Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh
                chấp sẽ được thương lượng thiện chí; nếu không đạt, tranh chấp
                sẽ được giải quyết tại cơ quan có thẩm quyền tại Việt Nam.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                12. Liên hệ
              </h2>
              <p className="text-gray-700">
                Mọi câu hỏi về Điều Khoản Dịch Vụ, vui lòng liên hệ: 0967 476
                659 — smartcodesolutions.vn@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
