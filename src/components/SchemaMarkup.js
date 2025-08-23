const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Smart Code Digital Solutions Co., Ltd.",
    url: "https://smartcodesolutions.vn",
    logo: "https://smartcodesolutions.vn/images/logo-name.png",
    description:
      "Công ty phát triển phần mềm, thiết kế website và ứng dụng di động chuyên nghiệp tại Cần Thơ",
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: "Cần Thơ",
      addressRegion: "Cần Thơ",
      streetAddress: "Cạnh 29E1, Đường F5, Khu Dân Cư 3A, Phường An Bình",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Vietnamese",
      telephone: "+84-0967-476-659",
      email: "smartcodesolutions.vn@gmail.com",
    },
    sameAs: [
      "https://facebook.com/smartcodesolutions",
      "https://linkedin.com/company/smart-code-digital-solutions",
    ],
    serviceArea: {
      "@type": "Country",
      name: "Vietnam",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dịch vụ phát triển phần mềm",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Thiết kế website",
            description: "Dịch vụ thiết kế website chuyên nghiệp, tối ưu SEO",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Phát triển ứng dụng di động",
            description:
              "Thiết kế và phát triển ứng dụng mobile cho iOS và Android",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Phát triển phần mềm",
            description:
              "Phát triển phần mềm tùy chỉnh theo yêu cầu doanh nghiệp",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bảo trì và nâng cấp phần mềm",
            description: "Dịch vụ bảo trì, nâng cấp và tối ưu hóa phần mềm",
          },
        },
      ],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Smart Code Digital Solutions Co., Ltd.",
    description:
      "Công ty phát triển phần mềm, thiết kế website và ứng dụng di động chuyên nghiệp tại Cần Thơ",
    url: "https://smartcodesolutions.vn",
    telephone: "+84-0967-476-659",
    email: "smartcodesolutions.vn@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: "Cần Thơ",
      addressRegion: "Cần Thơ",
      streetAddress: "Cạnh 29E1, Đường F5, Khu Dân Cư 3A, Phường An Bình",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.0452",
      longitude: "105.7469",
    },
    openingHours: "Mo-Fr 08:30-17:00",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
    serviceType: [
      "Phát triển phần mềm",
      "Thiết kế website",
      "Ứng dụng di động",
      "Chuyển đổi số",
      "Bảo trì phần mềm",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
};

export default SchemaMarkup;
