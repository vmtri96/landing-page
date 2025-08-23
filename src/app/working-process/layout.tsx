import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Quy Trình Làm Việc - Smart Code Digital Solutions | Phương Pháp Phát Triển Phần Mềm Chuyên Nghiệp",
  description:
    "Khám phá quy trình làm việc chuyên nghiệp của Smart Code Digital Solutions: từ phân tích yêu cầu, thiết kế UI/UX, lập trình đến bàn giao và bảo trì. Đảm bảo chất lượng và tiến độ dự án.",
  keywords:
    "quy trình làm việc, phương pháp phát triển phần mềm, quy trình thiết kế UI/UX, lập trình agile, bàn giao dự án, bảo trì phần mềm, quản lý dự án CNTT",
  alternates: {
    canonical: "/working-process",
  },
  openGraph: {
    title:
      "Quy Trình Làm Việc - Smart Code Digital Solutions | Phương Pháp Phát Triển Phần Mềm Chuyên Nghiệp",
    description:
      "Khám phá quy trình làm việc chuyên nghiệp của Smart Code Digital Solutions: từ phân tích yêu cầu, thiết kế UI/UX, lập trình đến bàn giao và bảo trì.",
    url: "https://smartcodesolutions.vn/working-process",
    siteName: "Smart Code Digital Solutions Co., Ltd.",
    images: [
      {
        url: "/images/logo-name.png",
        width: 1024,
        height: 1024,
        alt: "Smart Code Digital Solutions - Quy Trình Làm Việc",
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
      "Khám phá quy trình làm việc chuyên nghiệp của Smart Code Digital Solutions: từ phân tích yêu cầu, thiết kế UI/UX, lập trình đến bàn giao và bảo trì.",
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
