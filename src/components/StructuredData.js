const StructuredData = ({ type, data = {} }) => {
  const generateStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Smart Code Digital Solutions Co., Ltd.",
          url: "https://smartcodesolutions.vn",
          logo: "https://smartcodesolutions.vn/images/logo-name.png",
          description:
            "Công ty phát triển phần mềm, thiết kế website, ứng dụng di động và chuyển đổi số chuyên nghiệp tại Cần Thơ, Việt Nam",
          foundingDate: "2019",
          address: {
            "@type": "PostalAddress",
            addressCountry: "VN",
            addressLocality: "Cần Thơ",
            addressRegion: "Cần Thơ",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+84-967-476-659",
            contactType: "customer service",
            email: "smartcodesolutions.vn@gmail.com",
          },
          sameAs: [
            "https://www.facebook.com/smartcodesolutions",
            "https://www.linkedin.com/company/smart-code-digital-solutions",
          ],
        };

      case "localBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Smart Code Digital Solutions Co., Ltd.",
          description:
            "Dịch vụ phát triển phần mềm, thiết kế website, ứng dụng di động chuyên nghiệp tại Cần Thơ",
          url: "https://smartcodesolutions.vn",
          telephone: "+84-967-476-659",
          email: "smartcodesolutions.vn@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "VN",
            addressLocality: "Cần Thơ",
            addressRegion: "Cần Thơ",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "10.0452",
            longitude: "105.7469",
          },
          openingHours: "Mo-Fr 08:00-18:00",
          priceRange: "$$",
          serviceArea: {
            "@type": "Country",
            name: "Việt Nam",
          },
        };

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name || "Dịch Vụ Phát Triển Phần Mềm",
          description:
            data.description ||
            "Phát triển phần mềm, thiết kế website, ứng dụng di động chuyên nghiệp",
          provider: {
            "@type": "Organization",
            name: "Smart Code Digital Solutions Co., Ltd.",
          },
          areaServed: {
            "@type": "Country",
            name: "Việt Nam",
          },
          serviceType: data.serviceType || "Phát triển phần mềm",
          offers: {
            "@type": "Offer",
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
          },
        };

      case "contactPoint":
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Liên Hệ - Smart Code Digital Solutions",
          description:
            "Liên hệ để được tư vấn và báo giá dịch vụ phát triển phần mềm",
          url: "https://smartcodesolutions.vn/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Smart Code Digital Solutions Co., Ltd.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+84-967-476-659",
              contactType: "customer service",
              email: "smartcodesolutions.vn@gmail.com",
              availableLanguage: "Vietnamese",
            },
          },
        };

      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        };

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `https://smartcodesolutions.vn${item.href}`,
          })),
        };

      case "webSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Smart Code Digital Solutions",
          url: "https://smartcodesolutions.vn",
          description:
            "Công ty phát triển phần mềm, thiết kế website, ứng dụng di động chuyên nghiệp",
          publisher: {
            "@type": "Organization",
            name: "Smart Code Digital Solutions Co., Ltd.",
          },
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://smartcodesolutions.vn/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
