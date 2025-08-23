import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Về Chúng Tôi - Smart Code Digital Solutions | Công Ty Phát Triển Phần Mềm Hàng Đầu Cần Thơ",
  description:
    "Smart Code Digital Solutions - Công ty phát triển phần mềm, thiết kế website và ứng dụng di động hàng đầu tại Cần Thơ. Hơn 5 năm kinh nghiệm, 100+ dự án thành công.",
  keywords:
    "về smart code digital solutions, công ty phần mềm Cần Thơ, đội ngũ lập trình viên Cần Thơ, kinh nghiệm phát triển phần mềm Cần Thơ, dự án thành công Cần Thơ, công ty IT Cần Thơ",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "Về Chúng Tôi - Smart Code Digital Solutions | Công Ty Phát Triển Phần Mềm Hàng Đầu Cần Thơ",
    description:
      "Smart Code Digital Solutions - Công ty phát triển phần mềm, thiết kế website và ứng dụng di động hàng đầu tại Cần Thơ. Hơn 5 năm kinh nghiệm, 100+ dự án thành công.",
    url: "https://smartcodesolutions.vn/about",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Về Smart Code Digital Solutions - Công Ty Phát Triển Phần Mềm Hàng Đầu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Về Chúng Tôi - Smart Code Digital Solutions | Công Ty Phát Triển Phần Mềm Hàng Đầu Cần Thơ",
    description:
      "Smart Code Digital Solutions - Công ty phát triển phần mềm, thiết kế website và ứng dụng di động hàng đầu tại Cần Thơ.",
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
