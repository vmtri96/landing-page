import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chính Sách Bảo Mật - Smart Code Digital Solutions | Bảo Vệ Thông Tin Khách Hàng",
  description:
    "Chính sách bảo mật của Smart Code Digital Solutions - Cam kết bảo vệ thông tin cá nhân và dữ liệu khách hàng. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn.",
  keywords:
    "chính sách bảo mật, bảo vệ thông tin cá nhân, quyền riêng tư, bảo mật dữ liệu, cookies, thông tin khách hàng, quyền truy cập dữ liệu",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title:
      "Chính Sách Bảo Mật - Smart Code Digital Solutions | Bảo Vệ Thông Tin Khách Hàng",
    description:
      "Chính sách bảo mật của Smart Code Digital Solutions - Cam kết bảo vệ thông tin cá nhân và dữ liệu khách hàng.",
    url: "https://smartcodesolutions.vn/privacy-policy",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions - Chính Sách Bảo Mật",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chính Sách Bảo Mật - Smart Code Digital Solutions | Bảo Vệ Thông Tin Khách Hàng",
    description:
      "Chính sách bảo mật của Smart Code Digital Solutions - Cam kết bảo vệ thông tin cá nhân và dữ liệu khách hàng.",
    images: ["/images/logo-name.png"],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
