export const metadata = {
  title: "Chính Sách Bảo Mật - Smart Code Digital Solutions",
  description:
    "Cách Smart Code Digital Solutions thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân của bạn.",
  keywords:
    "chính sách bảo mật, privacy policy, bảo vệ dữ liệu, Smart Code Digital Solutions",
  alternates: {
    canonical: "/privacy-policy",
    languages: { vi: "/privacy-policy" },
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
    title: "Chính Sách Bảo Mật - Smart Code Digital Solutions",
    description: "Chính sách bảo mật dữ liệu và quyền riêng tư của người dùng.",
    url: "/privacy-policy",
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
    title: "Chính Sách Bảo Mật - Smart Code Digital Solutions",
    description: "Chính sách bảo mật dữ liệu và quyền riêng tư của người dùng.",
    images: ["/images/logo-name.png"],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
