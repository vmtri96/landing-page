export const metadata = {
  title: "Liên Hệ - Smart Code Digital Solutions",
  description:
    "Liên hệ Smart Code Digital Solutions để được tư vấn giải pháp phần mềm, thiết kế website và ứng dụng di động. Chúng tôi phản hồi nhanh và hỗ trợ tận tâm.",
  keywords:
    "liên hệ, tư vấn phần mềm, thiết kế website, ứng dụng di động, Smart Code Digital Solutions",
  alternates: {
    canonical: "/contact",
    languages: {
      vi: "/contact",
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
    title: "Liên Hệ - Smart Code Digital Solutions",
    description:
      "Liên hệ để được tư vấn giải pháp phần mềm, website và ứng dụng di động.",
    url: "/contact",
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
    title: "Liên Hệ - Smart Code Digital Solutions",
    description:
      "Liên hệ để được tư vấn giải pháp phần mềm, website và ứng dụng di động.",
    images: ["/images/logo-name.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
