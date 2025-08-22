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
    "Smart Code Digital Solutions - Dịch Vụ Phát Triển Phần Mềm, Website & Ứng Dụng Di Động Chuyên Nghiệp",
  description:
    "Smart Code Digital Solutions cung cấp dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động và chuyển đổi số chuyên nghiệp. Giải pháp công nghệ tối ưu cho doanh nghiệp với giá cả hợp lý, chất lượng cao.",
  keywords:
    "phát triển phần mềm, thiết kế website, ứng dụng di động, chuyển đổi số, phát triển web, app mobile, giải pháp CNTT, công ty phần mềm, dịch vụ IT, lập trình viên, thiết kế giao diện, SEO website, bảo trì phần mềm",
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
      "Smart Code Digital Solutions - Dịch Vụ Phát Triển Phần Mềm & Website Chuyên Nghiệp",
    description:
      "Chuyển đổi doanh nghiệp của bạn với các giải pháp công nghệ tiên tiến và dịch vụ phát triển phần mềm chuyên nghiệp. Thiết kế website, ứng dụng di động, bảo trì phần mềm.",
    url: "https://smartcodesolutions.vn",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions - Dịch Vụ Phát Triển Phần Mềm Chuyên Nghiệp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Smart Code Digital Solutions - Dịch Vụ Phát Triển Phần Mềm & Website Chuyên Nghiệp",
    description:
      "Chuyển đổi doanh nghiệp của bạn với các giải pháp công nghệ tiên tiến và dịch vụ phát triển phần mềm chuyên nghiệp.",
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
