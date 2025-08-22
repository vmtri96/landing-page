import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Lộ Trình Hợp Tác - Smart Code Digital Solutions | Quy Trình Làm Việc Với Khách Hàng",
  description:
    "Khám phá lộ trình hợp tác 3 giai đoạn của Smart Code Digital Solutions: khám phá nhu cầu, thiết kế giải pháp, triển khai & hỗ trợ. Đảm bảo thành công dự án và sự hài lòng của khách hàng.",
  keywords:
    "lộ trình hợp tác, quy trình làm việc với khách hàng, khám phá nhu cầu, thiết kế giải pháp, triển khai dự án, hỗ trợ khách hàng, quản lý dự án CNTT",
  alternates: {
    canonical: "/client-pathway",
  },
  openGraph: {
    title:
      "Lộ Trình Hợp Tác - Smart Code Digital Solutions | Quy Trình Làm Việc Với Khách Hàng",
    description:
      "Khám phá lộ trình hợp tác 3 giai đoạn của Smart Code Digital Solutions: khám phá nhu cầu, thiết kế giải pháp, triển khai & hỗ trợ.",
    url: "https://smartcodesolutions.vn/client-pathway",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions - Lộ Trình Hợp Tác",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lộ Trình Hợp Tác - Smart Code Digital Solutions | Quy Trình Làm Việc Với Khách Hàng",
    description:
      "Khám phá lộ trình hợp tác 3 giai đoạn của Smart Code Digital Solutions: khám phá nhu cầu, thiết kế giải pháp, triển khai & hỗ trợ.",
    images: ["/images/logo-name.png"],
  },
};

export default function ClientPathwayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
