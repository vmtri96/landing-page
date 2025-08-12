export const metadata = {
  title: "Quy Trình Làm Việc - Smart Code Digital Solutions",
  description:
    "Khám phá quy trình làm việc của Smart Code Digital Solutions: Phân tích, thiết kế UI/UX, demo, lập trình, bàn giao và bảo trì để đảm bảo chất lượng dự án.",
  keywords:
    "quy trình làm việc, phát triển phần mềm, thiết kế UI/UX, demo thiết kế, lập trình, bàn giao, bảo trì, Smart Code Digital Solutions",
  alternates: {
    canonical: "/working-process",
    languages: {
      vi: "/working-process",
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
    title: "Quy Trình Làm Việc - Smart Code Digital Solutions",
    description:
      "Quy trình làm việc bài bản: Phân tích, thiết kế UI/UX, demo, lập trình, bàn giao và bảo trì.",
    url: "/working-process",
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
    title: "Quy Trình Làm Việc - Smart Code Digital Solutions",
    description:
      "Quy trình làm việc bài bản: Phân tích, thiết kế UI/UX, demo, lập trình, bàn giao và bảo trì.",
    images: ["/images/logo-name.png"],
  },
};

export default function WorkingProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
