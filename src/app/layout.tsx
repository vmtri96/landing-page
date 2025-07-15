import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "SmartCode Solutions - Dịch Vụ Phát Triển Phần Mềm Chuyên Nghiệp",
  description:
    "SmartCode Solutions cung cấp dịch vụ phát triển phần mềm chuyên nghiệp, giải pháp tùy chỉnh và dịch vụ chuyển đổi số. Chuyển đổi doanh nghiệp của bạn với các giải pháp công nghệ tiên tiến của chúng tôi.",
  keywords:
    "phát triển phần mềm, phần mềm tùy chỉnh, chuyển đổi số, phát triển web, ứng dụng di động, giải pháp CNTT",
  authors: [{ name: "SmartCode Solutions" }],
  creator: "SmartCode Solutions",
  publisher: "SmartCode Solutions",
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
    title: "SmartCode Solutions - Dịch Vụ Phát Triển Phần Mềm Chuyên Nghiệp",
    description:
      "Chuyển đổi doanh nghiệp của bạn với các giải pháp công nghệ tiên tiến và dịch vụ phát triển phần mềm chuyên nghiệp của chúng tôi.",
    url: "https://smartcodesolutions.vn",
    siteName: "SmartCode Solutions",
    images: [
      {
        url: "/images/trans-logo-white.png",
        width: 1200,
        height: 630,
        alt: "SmartCode Solutions - Dịch Vụ Phát Triển Phần Mềm Chuyên Nghiệp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartCode Solutions - Dịch Vụ Phát Triển Phần Mềm Chuyên Nghiệp",
    description:
      "Chuyển đổi doanh nghiệp của bạn với các giải pháp công nghệ tiên tiến và dịch vụ phát triển phần mềm chuyên nghiệp của chúng tôi.",
    images: ["/images/trans-logo-white.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
