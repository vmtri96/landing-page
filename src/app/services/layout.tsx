import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dịch Vụ - Smart Code Digital Solutions | Phát Triển Phần Mềm, Website & Ứng Dụng Di Động",
  description:
    "Smart Code Digital Solutions cung cấp dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động và chuyển đổi số chuyên nghiệp. Báo giá minh bạch, chất lượng cao.",
  keywords:
    "dịch vụ phát triển phần mềm Cần Thơ, thiết kế website Cần Thơ, ứng dụng di động Cần Thơ, chuyển đổi số Cần Thơ, báo giá phần mềm Cần Thơ, dịch vụ IT Cần Thơ",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Dịch Vụ - Smart Code Digital Solutions | Phát Triển Phần Mềm, Website & Ứng Dụng Di Động",
    description:
      "Smart Code Digital Solutions cung cấp dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động và chuyển đổi số chuyên nghiệp.",
    url: "https://smartcodesolutions.vn/services",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Dịch Vụ Smart Code Digital Solutions - Phát Triển Phần Mềm Chuyên Nghiệp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dịch Vụ - Smart Code Digital Solutions | Phát Triển Phần Mềm, Website & Ứng Dụng Di Động",
    description:
      "Smart Code Digital Solutions cung cấp dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động và chuyển đổi số chuyên nghiệp.",
    images: ["/images/logo-name.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
