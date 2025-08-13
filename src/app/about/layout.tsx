export const metadata = {
  title: "Về Chúng Tôi - Smart Code Digital Solutions",
  description:
    "Giới thiệu về Smart Code Digital Solutions: đội ngũ, năng lực, sứ mệnh và tầm nhìn trong lĩnh vực phát triển phần mềm và chuyển đổi số.",
  keywords:
    "về chúng tôi, giới thiệu công ty, Smart Code Digital Solutions, đội ngũ, sứ mệnh, tầm nhìn",
  alternates: {
    canonical: "/about",
    languages: { vi: "/about" },
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
    title: "Về Chúng Tôi - Smart Code Digital Solutions",
    description:
      "Đội ngũ giàu kinh nghiệm, quy trình chuyên nghiệp và cam kết chất lượng trong mọi dự án phần mềm.",
    url: "/about",
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
    title: "Về Chúng Tôi - Smart Code Digital Solutions",
    description:
      "Đội ngũ giàu kinh nghiệm, quy trình chuyên nghiệp và cam kết chất lượng trong mọi dự án phần mềm.",
    images: ["/images/logo-name.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
