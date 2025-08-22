import { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/Services";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import WorkingProcess from "@/components/WorkingProcess";
import Hero from "@/components/Hero";
import ClientPathway from "@/components/ClientPathway";

export const metadata: Metadata = {
  title:
    "Smart Code Digital Solutions - Dịch Vụ Phát Triển Phần Mềm & Website Chuyên Nghiệp",
  description:
    "Smart Code Digital Solutions cung cấp dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động và chuyển đổi số chuyên nghiệp. Giải pháp công nghệ tối ưu cho doanh nghiệp với giá cả hợp lý, chất lượng cao.",
  keywords:
    "phát triển phần mềm, thiết kế website, ứng dụng di động, chuyển đổi số, phát triển web, app mobile, giải pháp CNTT, công ty phần mềm, dịch vụ IT, lập trình viên, thiết kế giao diện, SEO website, bảo trì phần mềm",
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
};

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WorkingProcess />
      <Services />
      <ClientPathway />
      <ContactForm />
      <Footer />
    </div>
  );
}
