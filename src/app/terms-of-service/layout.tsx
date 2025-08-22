import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Điều Khoản Dịch Vụ - Smart Code Digital Solutions | Điều Kiện Hợp Tác & Sử Dụng",
  description:
    "Điều khoản dịch vụ của Smart Code Digital Solutions - Quy định về việc sử dụng dịch vụ, trách nhiệm, quyền sở hữu trí tuệ và các điều kiện hợp tác. Đọc kỹ trước khi sử dụng dịch vụ.",
  keywords:
    "điều khoản dịch vụ, điều kiện hợp tác, quyền sở hữu trí tuệ, trách nhiệm pháp lý, bảo hành dịch vụ, thanh toán, chấm dứt hợp đồng",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title:
      "Điều Khoản Dịch Vụ - Smart Code Digital Solutions | Điều Kiện Hợp Tác & Sử Dụng",
    description:
      "Điều khoản dịch vụ của Smart Code Digital Solutions - Quy định về việc sử dụng dịch vụ, trách nhiệm, quyền sở hữu trí tuệ và các điều kiện hợp tác.",
    url: "https://smartcodesolutions.vn/terms-of-service",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions - Điều Khoản Dịch Vụ",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Điều Khoản Dịch Vụ - Smart Code Digital Solutions | Điều Kiện Hợp Tác & Sử Dụng",
    description:
      "Điều khoản dịch vụ của Smart Code Digital Solutions - Quy định về việc sử dụng dịch vụ, trách nhiệm, quyền sở hữu trí tuệ và các điều kiện hợp tác.",
    images: ["/images/logo-name.png"],
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
