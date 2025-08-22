import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Dịch Vụ Phát Triển Phần Mềm - Smart Code Digital Solutions | Website, App Mobile, Chuyển Đổi Số",
  description:
    "Smart Code Digital Solutions cung cấp đầy đủ dịch vụ phát triển phần mềm: thiết kế website, ứng dụng di động, hệ thống quản lý, chuyển đổi số. Giải pháp tùy chỉnh theo nhu cầu doanh nghiệp.",
  keywords:
    "dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động, hệ thống quản lý, chuyển đổi số, phát triển web, app mobile, phần mềm doanh nghiệp, giải pháp CNTT",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Dịch Vụ Phát Triển Phần Mềm - Smart Code Digital Solutions | Website, App Mobile, Chuyển Đổi Số",
    description:
      "Smart Code Digital Solutions cung cấp đầy đủ dịch vụ phát triển phần mềm: thiết kế website, ứng dụng di động, hệ thống quản lý, chuyển đổi số.",
    url: "https://smartcodesolutions.vn/services",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions - Dịch Vụ Phát Triển Phần Mềm",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dịch Vụ Phát Triển Phần Mềm - Smart Code Digital Solutions | Website, App Mobile, Chuyển Đổi Số",
    description:
      "Smart Code Digital Solutions cung cấp đầy đủ dịch vụ phát triển phần mềm: thiết kế website, ứng dụng di động, hệ thống quản lý, chuyển đổi số.",
    images: ["/images/logo-name.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        type="service"
        data={{
          name: "Dịch Vụ Phát Triển Phần Mềm",
          description:
            "Phát triển phần mềm, thiết kế website, ứng dụng di động chuyên nghiệp",
          serviceType: "Phát triển phần mềm",
        }}
      />
      {children}
    </>
  );
}
