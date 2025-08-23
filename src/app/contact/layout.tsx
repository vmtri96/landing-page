import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Liên Hệ - Smart Code Digital Solutions | Tư Vấn Phát Triển Phần Mềm & Website",
  description:
    "Liên hệ Smart Code Digital Solutions để được tư vấn phát triển phần mềm, thiết kế website và ứng dụng di động. Hỗ trợ 24/7, báo giá miễn phí tại Cần Thơ.",
  keywords:
    "liên hệ phát triển phần mềm Cần Thơ, tư vấn thiết kế website Cần Thơ, báo giá ứng dụng di động Cần Thơ, công ty IT Cần Thơ, dịch vụ lập trình Cần Thơ, tư vấn chuyển đổi số Cần Thơ",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title:
      "Liên Hệ - Smart Code Digital Solutions | Tư Vấn Phát Triển Phần Mềm & Website",
    description:
      "Liên hệ Smart Code Digital Solutions để được tư vấn phát triển phần mềm, thiết kế website và ứng dụng di động. Hỗ trợ 24/7, báo giá miễn phí tại Cần Thơ.",
    url: "https://smartcodesolutions.vn/contact",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Liên Hệ Smart Code Digital Solutions - Tư Vấn Phát Triển Phần Mềm",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Liên Hệ - Smart Code Digital Solutions | Tư Vấn Phát Triển Phần Mềm & Website",
    description:
      "Liên hệ Smart Code Digital Solutions để được tư vấn phát triển phần mềm, thiết kế website và ứng dụng di động.",
    images: ["/images/logo-name.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData type="contactPoint" />
      {children}
    </>
  );
}
