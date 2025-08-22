import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Liên Hệ - Smart Code Digital Solutions | Tư Vấn & Báo Giá Dịch Vụ Phát Triển Phần Mềm",
  description:
    "Liên hệ Smart Code Digital Solutions để được tư vấn và báo giá dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động. Hỗ trợ 24/7, phản hồi nhanh chóng.",
  keywords:
    "liên hệ smart code, tư vấn phát triển phần mềm, báo giá website, báo giá app mobile, hỗ trợ khách hàng, tư vấn chuyển đổi số, địa chỉ công ty phần mềm",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title:
      "Liên Hệ - Smart Code Digital Solutions | Tư Vấn & Báo Giá Dịch Vụ Phát Triển Phần Mềm",
    description:
      "Liên hệ Smart Code Digital Solutions để được tư vấn và báo giá dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động. Hỗ trợ 24/7.",
    url: "https://smartcodesolutions.vn/contact",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions - Liên Hệ",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Liên Hệ - Smart Code Digital Solutions | Tư Vấn & Báo Giá Dịch Vụ Phát Triển Phần Mềm",
    description:
      "Liên hệ Smart Code Digital Solutions để được tư vấn và báo giá dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động. Hỗ trợ 24/7.",
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
