import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Về Chúng Tôi - Smart Code Digital Solutions Cần Thơ | Công Ty Phát Triển Phần Mềm Hàng Đầu",
  description:
    "Tìm hiểu về Smart Code Digital Solutions Cần Thơ - Công ty phát triển phần mềm hàng đầu tại Cần Thơ với 5+ năm kinh nghiệm, 100+ dự án thành công. Đội ngũ lập trình viên giàu kinh nghiệm, công nghệ hiện đại.",
  keywords:
    "về smart code Cần Thơ, công ty phần mềm Cần Thơ, đội ngũ lập trình viên Cần Thơ, kinh nghiệm phát triển Cần Thơ, dự án thành công Cần Thơ, công nghệ hiện đại Cần Thơ, dịch vụ IT chuyên nghiệp Cần Thơ",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "Về Chúng Tôi - Smart Code Digital Solutions | Công Ty Phát Triển Phần Mềm Hàng Đầu",
    description:
      "Tìm hiểu về Smart Code Digital Solutions - Công ty phát triển phần mềm hàng đầu với 5+ năm kinh nghiệm, 100+ dự án thành công.",
    url: "https://smartcodesolutions.vn/about",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions - Về Chúng Tôi",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Về Chúng Tôi - Smart Code Digital Solutions | Công Ty Phát Triển Phần Mềm Hàng Đầu",
    description:
      "Tìm hiểu về Smart Code Digital Solutions - Công ty phát triển phần mềm hàng đầu với 5+ năm kinh nghiệm, 100+ dự án thành công.",
    images: ["/images/logo-name.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
