export const metadata = {
  title: "Dịch Vụ - Smart Code Digital Solutions",
  description:
    "Khám phá các gói dịch vụ của Smart Code Digital Solutions: từ gói cơ bản đến cao cấp và tuỳ chọn, phù hợp với nhiều nhu cầu và ngân sách khác nhau.",
  keywords:
    "dịch vụ phần mềm, thiết kế website, phát triển ứng dụng, gói dịch vụ, Smart Code Digital Solutions",
  alternates: {
    canonical: "/services",
    languages: {
      vi: "/services",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  verification: {
    google: "3aEoKlZSWHkTDDXJ1ceYWtb3ttOdihPpLmA7bCsciJM",
  },
  openGraph: {
    title: "Dịch Vụ - Smart Code Digital Solutions",
    description:
      "Các gói dịch vụ linh hoạt: cơ bản, trung cấp, cao cấp và tuỳ chọn, phù hợp mọi nhu cầu.",
    url: "/services",
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
    title: "Dịch Vụ - Smart Code Digital Solutions",
    description:
      "Các gói dịch vụ linh hoạt: cơ bản, trung cấp, cao cấp và tuỳ chọn, phù hợp mọi nhu cầu.",
    images: ["/images/logo-name.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
