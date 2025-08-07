import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Blog - Smart Code Digital Solutions | Tin Tức Công Nghệ & Phát Triển Phần Mềm",
  description:
    "Blog chia sẻ kiến thức về phát triển phần mềm, thiết kế website, ứng dụng di động và các xu hướng công nghệ mới nhất. Cập nhật tin tức từ Smart Code Digital Solutions.",
  keywords:
    "blog công nghệ, tin tức phần mềm, phát triển website, ứng dụng di động, xu hướng công nghệ, kiến thức IT",
};

const blogPosts = [
  {
    id: 1,
    title: "Xu Hướng Phát Triển Phần Mềm 2024",
    excerpt:
      "Khám phá những xu hướng công nghệ mới nhất trong lĩnh vực phát triển phần mềm và ứng dụng di động năm 2024.",
    category: "Công Nghệ",
    date: "2024-01-15",
    readTime: "5 phút",
    slug: "xu-huong-phat-trien-phan-mem-2024",
  },
  {
    id: 2,
    title: "Tối Ưu SEO Cho Website: Hướng Dẫn Chi Tiết",
    excerpt:
      "Hướng dẫn từng bước cách tối ưu hóa SEO cho website để tăng thứ hạng trên Google và thu hút nhiều khách hàng hơn.",
    category: "SEO",
    date: "2024-01-10",
    readTime: "8 phút",
    slug: "toi-uu-seo-cho-website",
  },
  {
    id: 3,
    title: "Lựa Chọn Công Nghệ Phát Triển Ứng Dụng Di Động",
    excerpt:
      "So sánh các công nghệ phát triển app mobile: Native, React Native, Flutter và Ionic. Ưu nhược điểm của từng phương pháp.",
    category: "Mobile App",
    date: "2024-01-05",
    readTime: "6 phút",
    slug: "lua-chon-cong-nghe-phat-trien-ung-dung-di-dong",
  },
  {
    id: 4,
    title: "Chuyển Đổi Số: Bước Đi Tất Yếu Của Doanh Nghiệp",
    excerpt:
      "Tại sao chuyển đổi số là cần thiết cho doanh nghiệp trong thời đại công nghệ 4.0 và cách thực hiện hiệu quả.",
    category: "Chuyển Đổi Số",
    date: "2024-01-01",
    readTime: "7 phút",
    slug: "chuyen-doi-so-doanh-nghiep",
  },
  {
    id: 5,
    title: "Bảo Mật Website: Những Điều Cần Biết",
    excerpt:
      "Các biện pháp bảo mật website cần thiết để bảo vệ dữ liệu khách hàng và tránh các cuộc tấn công mạng.",
    category: "Bảo Mật",
    date: "2023-12-25",
    readTime: "9 phút",
    slug: "bao-mat-website",
  },
  {
    id: 6,
    title: "Thiết Kế UI/UX: Nghệ Thuật Tạo Trải Nghiệm Người Dùng",
    excerpt:
      "Những nguyên tắc thiết kế UI/UX hiệu quả để tạo ra giao diện đẹp và trải nghiệm người dùng tối ưu.",
    category: "Thiết Kế",
    date: "2023-12-20",
    readTime: "6 phút",
    slug: "thiet-ke-ui-ux",
  },
];

export default function BlogPage() {
  return (
    <div>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Tin Tức Công Nghệ
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Chia sẻ kiến thức, xu hướng công nghệ và kinh nghiệm trong lĩnh vực
            phát triển phần mềm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString("vi-VN")}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Đọc thêm →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Đăng Ký Nhận Tin Tức
            </h2>
            <p className="text-gray-600 mb-6">
              Nhận những bài viết mới nhất về công nghệ và phát triển phần mềm
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
