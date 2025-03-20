import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartcode Solutions - Giới thiệu về công ty - Sứ mệnh, Tầm nhìn & Dịch vụ",
  description: "Chúng tôi cung cấp các giải pháp phần mềm doanh nghiệp, phát triển ứng dụng web & di động, thương mại điện tử & Fintech, giúp doanh nghiệp tối ưu hóa quy trình và chuyển đổi số hiệu quả.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 from-blue-50 to-white container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">Giới thiệu về Công ty</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Sứ mệnh</h2>
          <p className="mb-4">
            Chúng tôi cam kết mang đến các giải pháp công nghệ tiên tiến, giúp doanh nghiệp tối ưu hóa quy trình hoạt động, nâng cao hiệu suất làm việc và thúc đẩy tăng trưởng bền vững. Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi không ngừng sáng tạo để cung cấp những sản phẩm và dịch vụ chất lượng cao, đáp ứng nhu cầu ngày càng đa dạng của khách hàng.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Tầm nhìn</h2>
          <p className="mb-4">
            Trở thành đơn vị hàng đầu trong lĩnh vực phát triển phần mềm doanh nghiệp, cung cấp các giải pháp số hóa toàn diện, giúp doanh nghiệp chuyển đổi số một cách hiệu quả. Chúng tôi hướng đến xây dựng một hệ sinh thái công nghệ thông minh, đáp ứng xu hướng phát triển của thị trường trong kỷ nguyên số.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Dịch vụ của chúng tôi</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">1. Phát triển phần mềm doanh nghiệp</h3>
            <p className="mb-2">Chúng tôi cung cấp các giải pháp phần mềm doanh nghiệp tùy chỉnh, bao gồm:</p>
            <ul className="list-disc list-inside">
              <li>Hệ thống quản lý quan hệ khách hàng (CRM)</li>
              <li>Hệ thống quản lý tài nguyên doanh nghiệp (ERP)</li>
              <li>Phần mềm quản lý bán hàng</li>
              <li>Phần mềm quản lý nhân sự</li>
              <li>Các nền tảng tự động hóa quy trình kinh doanh</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">2. Phát triển ứng dụng web và di động</h3>
            <p className="mb-2">Với đội ngũ giàu kinh nghiệm, chúng tôi phát triển các ứng dụng web và mobile hiện đại, sử dụng công nghệ tiên tiến như:</p>
            <ul className="list-disc list-inside">
              <li>Front-End: ReactJS, Angular, VueJS</li>
              <li>Back-End: Spring Boot, NestJS, Django</li>
              <li>Ứng dụng di động: Native (Android, iOS) và Cross-platform (Flutter, React Native)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">3. Thương mại điện tử & Fintech</h3>
            <p className="mb-2">Chúng tôi phát triển các nền tảng thương mại điện tử thông minh, tích hợp AI để:</p>
            <ul className="list-disc list-inside">
              <li>Cá nhân hóa trải nghiệm mua sắm</li>
              <li>Tối ưu quy trình thanh toán</li>
              <li>Quản lý chuỗi cung ứng</li>
            </ul>
            <p className="mb-2">Ngoài ra, chúng tôi cung cấp các giải pháp Fintech như:</p>
            <ul className="list-disc list-inside">
              <li>Ví điện tử</li>
              <li>Hệ thống thanh toán trực tuyến</li>
            </ul>
          </div>
        </section>

        <p className="mt-8">
          Với cam kết về chất lượng, sự sáng tạo và dịch vụ tận tâm, chúng tôi tự hào là đối tác tin cậy đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số!
        </p>
      </div>
      <Footer/>
    </main>
  )
}