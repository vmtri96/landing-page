export const metadata = {
  title: "Điều Khoản Dịch Vụ - Smart Code Digital Solutions",
  description:
    "Điều khoản sử dụng dịch vụ: phạm vi dịch vụ, thanh toán, bảo mật, sở hữu trí tuệ và giới hạn trách nhiệm.",
  keywords:
    "điều khoản dịch vụ, terms of service, điều kiện sử dụng, Smart Code Digital Solutions",
  alternates: {
    canonical: "/terms-of-service",
    languages: { vi: "/terms-of-service" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Điều Khoản Dịch Vụ - Smart Code Digital Solutions",
    description:
      "Điều kiện và điều khoản sử dụng dịch vụ của Smart Code Digital Solutions.",
    url: "/terms-of-service",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Điều Khoản Dịch Vụ - Smart Code Digital Solutions",
    description:
      "Điều kiện và điều khoản sử dụng dịch vụ của Smart Code Digital Solutions.",
    images: ["/images/logo-name.png"],
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
