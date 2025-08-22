import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Về Chúng Tôi - Smart Code Digital Solutions | Công Ty Phát Triển Phần Mềm Hàng Đầu",
  description:
    "Tìm hiểu về Smart Code Digital Solutions - Công ty phát triển phần mềm hàng đầu với 5+ năm kinh nghiệm, 100+ dự án thành công. Đội ngũ lập trình viên giàu kinh nghiệm, công nghệ hiện đại.",
  keywords:
    "về smart code, công ty phần mềm, đội ngũ lập trình viên, kinh nghiệm phát triển, dự án thành công, công nghệ hiện đại, dịch vụ IT chuyên nghiệp",
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
