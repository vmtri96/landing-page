import { Montserrat } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import EnhancedAnalytics from "@/components/EnhancedAnalytics";
import WebVitalsMonitor from "@/components/WebVitalsMonitor";
import ErrorBoundary from "@/components/ErrorBoundary";
import { PathProvider } from "@/contexts/PathContext";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title:
    "Smart Code Digital Solutions Cần Thơ - Công Ty Phát Triển Phần Mềm, Thiết Kế Website & Ứng Dụng Di Động Hàng Đầu Tại Cần Thơ",
  description:
    "Smart Code Digital Solutions Cần Thơ - Công ty phát triển phần mềm, thiết kế website, ứng dụng di động và chuyển đổi số chuyên nghiệp tại Cần Thơ. Giải pháp CNTT tối ưu cho doanh nghiệp với giá cả hợp lý, chất lượng cao. Hơn 5 năm kinh nghiệm, 100+ dự án thành công.",
  keywords:
    "phát triển phần mềm Cần Thơ, thiết kế website Cần Thơ, ứng dụng di động Cần Thơ, chuyển đổi số Cần Thơ, phát triển web Cần Thơ, app mobile Cần Thơ, giải pháp CNTT Cần Thơ, công ty phần mềm Cần Thơ, dịch vụ IT Cần Thơ, lập trình viên Cần Thơ, thiết kế giao diện Cần Thơ, SEO website Cần Thơ, bảo trì phần mềm Cần Thơ, công ty công nghệ Cần Thơ, phần mềm quản lý Cần Thơ",
  authors: [{ name: "Smart Code Digital Solutions Co., Ltd." }],
  creator: "Smart Code Digital Solutions Co., Ltd.",
  publisher: "Smart Code Digital Solutions Co., Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://smartcodesolutions.vn"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Smart Code Digital Solutions Cần Thơ - Công Ty Phát Triển Phần Mềm & Website Hàng Đầu Tại Cần Thơ",
    description:
      "Smart Code Digital Solutions Cần Thơ - Chuyển đổi doanh nghiệp với giải pháp CNTT tiên tiến. Phát triển phần mềm, thiết kế website, ứng dụng di động, bảo trì phần mềm tại Cần Thơ. Hơn 5 năm kinh nghiệm, 100+ dự án thành công.",
    url: "https://smartcodesolutions.vn",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions - Dịch Vụ Phát Triển Phần Mềm Chuyên Nghiệp Tại Cần Thơ",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Smart Code Digital Solutions Cần Thơ - Công Ty Phát Triển Phần Mềm & Website Hàng Đầu Tại Cần Thơ",
    description:
      "Smart Code Digital Solutions Cần Thơ - Chuyển đổi doanh nghiệp với giải pháp CNTT tiên tiến. Phát triển phần mềm, thiết kế website, ứng dụng di động tại Cần Thơ.",
    images: ["/images/logo-name.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <SchemaMarkup />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1C426B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Smart Code Digital Solutions"
        />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className={`${font.className}`}>
        <ErrorBoundary>
          <GoogleAnalytics />
          <PerformanceOptimizer />
          <EnhancedAnalytics />
          <WebVitalsMonitor />
          <StructuredData type="organization" />
          <StructuredData type="webSite" />
          <PathProvider>{children}</PathProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
