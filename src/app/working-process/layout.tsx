import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Quy Trình Làm Việc - Smart Code Digital Solutions | Phương Pháp Phát Triển Phần Mềm Chuyên Nghiệp",
  description:
    "Khám phá quy trình phát triển phần mềm chuyên nghiệp của Smart Code Digital Solutions. Từ phân tích yêu cầu đến bàn giao và bảo trì, đảm bảo dự án thành công 100%.",
  keywords:
    "quy trình phát triển phần mềm Cần Thơ, phương pháp làm việc IT Cần Thơ, quy trình thiết kế website Cần Thơ, phương pháp phát triển ứng dụng Cần Thơ, quy trình dự án phần mềm Cần Thơ",
  alternates: {
    canonical: "/working-process",
  },
  openGraph: {
    title:
      "Quy Trình Làm Việc - Smart Code Digital Solutions | Phương Pháp Phát Triển Phần Mềm Chuyên Nghiệp",
    description:
      "Khám phá quy trình phát triển phần mềm chuyên nghiệp của Smart Code Digital Solutions. Từ phân tích yêu cầu đến bàn giao và bảo trì, đảm bảo dự án thành công 100%.",
    url: "https://smartcodesolutions.vn/working-process",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Quy Trình Làm Việc Smart Code Digital Solutions - Phương Pháp Phát Triển Chuyên Nghiệp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Quy Trình Làm Việc - Smart Code Digital Solutions | Phương Pháp Phát Triển Phần Mềm Chuyên Nghiệp",
    description:
      "Khám phá quy trình phát triển phần mềm chuyên nghiệp của Smart Code Digital Solutions.",
    images: ["/images/logo-name.png"],
  },
};

export default function WorkingProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
