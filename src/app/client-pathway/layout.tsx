export const metadata = {
  title: "Lộ Trình Khách Hàng - Smart Code Digital Solutions",
  description:
    "Tìm hiểu cách Smart Code Digital Solutions đồng hành cùng khách hàng: khám phá nhu cầu, thiết kế giải pháp, triển khai và hỗ trợ.",
  keywords:
    "lộ trình khách hàng, quy trình hợp tác, tư vấn, triển khai, Smart Code Digital Solutions",
  alternates: {
    canonical: "/client-pathway",
    languages: {
      vi: "/client-pathway",
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
    title: "Lộ Trình Khách Hàng - Smart Code Digital Solutions",
    description:
      "Quy trình hợp tác với khách hàng: khám phá nhu cầu, thiết kế giải pháp, triển khai & hỗ trợ.",
    url: "/client-pathway",
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
    title: "Lộ Trình Khách Hàng - Smart Code Digital Solutions",
    description:
      "Quy trình hợp tác với khách hàng: khám phá nhu cầu, thiết kế giải pháp, triển khai & hỗ trợ.",
    images: ["/images/logo-name.png"],
  },
};

export default function ClientPathwayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
