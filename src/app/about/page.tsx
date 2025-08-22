import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from "@/components/RelatedContent";
import SocialSharing from "@/components/SocialSharing";
import CallToAction from "@/components/CallToAction";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <Breadcrumb />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Về Smart Code Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Chúng tôi là đơn vị tiên phong trong lĩnh vực phát triển phần mềm và
            chuyển đổi số tại Việt Nam
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Chúng Tôi Là Ai?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Smart Code Digital Solutions được thành lập với sứ mệnh mang đến
              những giải pháp công nghệ tối ưu cho doanh nghiệp Việt Nam. Với
              đội ngũ lập trình viên giàu kinh nghiệm và đam mê công nghệ, chúng
              tôi cam kết cung cấp những sản phẩm chất lượng cao.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Chúng tôi chuyên về phát triển phần mềm, thiết kế website, ứng
              dụng di động và các giải pháp chuyển đổi số toàn diện. Mỗi dự án
              đều được thực hiện với sự tận tâm và chuyên nghiệp cao nhất.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Thế Mạnh Của Chúng Tôi
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">
                  Đội ngũ lập trình viên giàu kinh nghiệm
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">
                  Công nghệ hiện đại và cập nhật
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Dịch vụ khách hàng 24/7</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">
                  Bảo hành và bảo trì dài hạn
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">
                  Giá cả cạnh tranh và minh bạch
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Tại Sao Chọn Smart Code Digital Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Năm Kinh Nghiệm
              </h3>
              <p className="text-gray-600">
                Hơn 5 năm kinh nghiệm trong lĩnh vực phát triển phần mềm
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">100+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dự Án Thành Công
              </h3>
              <p className="text-gray-600">
                Đã hoàn thành hơn 100 dự án cho khách hàng
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Khách Hàng Hài Lòng
              </h3>
              <p className="text-gray-600">
                Hơn 50 khách hàng tin tưởng và hợp tác dài hạn
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sứ Mệnh & Tầm Nhìn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sứ Mệnh
              </h3>
              <p className="text-gray-600">
                Mang đến những giải pháp công nghệ tối ưu, giúp doanh nghiệp
                Việt Nam chuyển đổi số thành công và phát triển bền vững trong
                thời đại công nghệ 4.0.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tầm Nhìn
              </h3>
              <p className="text-gray-600">
                Trở thành đối tác công nghệ tin cậy hàng đầu tại Việt Nam, được
                khách hàng lựa chọn và tin tưởng cho mọi dự án chuyển đổi số.
              </p>
            </div>
          </div>
        </div>
      </main>

      <RelatedContent
        currentPage="/about"
        relatedPages={[
          {
            href: "/services",
            title: "Dịch Vụ Của Chúng Tôi",
            description:
              "Khám phá đầy đủ các dịch vụ phát triển phần mềm, website và ứng dụng di động",
          },
          {
            href: "/working-process",
            title: "Quy Trình Làm Việc",
            description:
              "Tìm hiểu quy trình phát triển chuyên nghiệp và phương pháp làm việc của chúng tôi",
          },
          {
            href: "/contact",
            title: "Liên Hệ Tư Vấn",
            description:
              "Liên hệ ngay để được tư vấn và báo giá dịch vụ phù hợp với nhu cầu của bạn",
          },
        ]}
      />

      <CallToAction
        title="Tin tưởng chúng tôi với dự án của bạn?"
        description="Hãy để đội ngũ chuyên nghiệp của chúng tôi giúp bạn hiện thực hóa ý tưởng"
        primaryButton={{
          text: "Liên Hệ Tư Vấn",
          href: "/contact",
          variant: "primary",
        }}
        secondaryButton={{
          text: "Xem Dịch Vụ",
          href: "/services",
          variant: "secondary",
        }}
      />

      <SocialSharing
        title="Về Smart Code Digital Solutions - Công Ty Phát Triển Phần Mềm Hàng Đầu"
        url="https://smartcodesolutions.vn/about"
      />

      <Footer />
    </div>
  );
}
