import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Header />

      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Chính Sách Bảo Mật
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Chúng tôi tôn trọng và bảo vệ quyền riêng tư của khách hàng và
              người dùng. Chính sách này giải thích dữ liệu cá nhân nào được thu
              thập, mục đích sử dụng và cách chúng tôi bảo vệ dữ liệu đó.
            </p>
          </div>

          <div className="space-y-10 text-gray-800">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                1. Dữ liệu chúng tôi thu thập
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Thông tin liên hệ: họ tên, email, số điện thoại, công ty.
                </li>
                <li>
                  Nội dung trao đổi: yêu cầu dự án, thông tin mô tả, tệp đính
                  kèm.
                </li>
                <li>
                  Dữ liệu kỹ thuật: địa chỉ IP, loại trình duyệt, trang đã xem
                  (cookies).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                2. Mục đích sử dụng dữ liệu
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Phản hồi liên hệ, tư vấn giải pháp và cung cấp báo giá.</li>
                <li>Thực hiện hợp đồng, triển khai và bảo trì dịch vụ.</li>
                <li>Cải thiện trải nghiệm người dùng và bảo mật hệ thống.</li>
                <li>
                  Gửi thông tin tiếp thị theo sự cho phép của bạn (có thể hủy
                  bất cứ lúc nào).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                3. Cơ sở pháp lý xử lý dữ liệu
              </h2>
              <p className="text-gray-700">
                Chúng tôi xử lý dữ liệu dựa trên sự đồng ý của bạn, việc thực
                hiện hợp đồng, lợi ích hợp pháp (cải thiện dịch vụ, bảo mật) và
                tuân thủ nghĩa vụ pháp lý.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                4. Chia sẻ dữ liệu cho bên thứ ba
              </h2>
              <p className="text-gray-700 mb-2">
                Chúng tôi chỉ chia sẻ dữ liệu với nhà cung cấp dịch vụ cần thiết
                để vận hành hệ thống (ví dụ: nền tảng email, lưu trữ đám mây)
                theo hợp đồng bảo mật dữ liệu, hoặc khi có yêu cầu pháp lý.
              </p>
              <p className="text-gray-700">
                Chúng tôi không bán dữ liệu cá nhân của bạn cho bất kỳ bên thứ
                ba nào.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                5. Lưu trữ và bảo mật
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Áp dụng biện pháp kỹ thuật và tổ chức để bảo vệ dữ liệu khỏi
                  truy cập trái phép.
                </li>
                <li>
                  Chỉ lưu trữ trong thời gian cần thiết cho mục đích đã nêu hoặc
                  theo yêu cầu pháp luật.
                </li>
                <li>
                  Mã hóa, phân quyền truy cập và sao lưu định kỳ theo thực tiễn
                  tốt.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                6. Quyền của bạn
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Quyền truy cập, chỉnh sửa, xóa dữ liệu cá nhân.</li>
                <li>
                  Quyền rút lại sự đồng ý và phản đối hoạt động xử lý dữ liệu.
                </li>
                <li>
                  Quyền yêu cầu cung cấp bản sao dữ liệu ở định dạng có thể đọc
                  được.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                7. Cookies và công nghệ tương tự
              </h2>
              <p className="text-gray-700">
                Chúng tôi sử dụng cookies để ghi nhớ tùy chọn, phân tích lưu
                lượng và cải thiện trải nghiệm. Bạn có thể điều chỉnh trình
                duyệt để từ chối cookies nhưng một số tính năng có thể không
                hoạt động tối ưu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                8. Chuyển dữ liệu ra nước ngoài
              </h2>
              <p className="text-gray-700">
                Trong một số trường hợp, dữ liệu có thể được xử lý/lưu trữ trên
                máy chủ đặt ở quốc gia khác. Chúng tôi đảm bảo tuân thủ các yêu
                cầu bảo vệ dữ liệu áp dụng.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                9. Cập nhật chính sách
              </h2>
              <p className="text-gray-700">
                Chính sách có thể được cập nhật định kỳ. Phiên bản mới sẽ có
                hiệu lực kể từ ngày công bố trên website này và thay thế các bản
                trước đó.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                10. Liên hệ
              </h2>
              <p className="text-gray-700">
                Nếu bạn có câu hỏi về Chính Sách Bảo Mật, vui lòng liên hệ: 0967
                476 659 — smartcodesolutions.vn@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
