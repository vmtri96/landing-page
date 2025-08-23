const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Smart Code Digital Solutions Co., Ltd.",
    url: "https://smartcodesolutions.vn",
    logo: "https://smartcodesolutions.vn/images/logo-name-blue.png",
    description:
      "Công ty phát triển phần mềm, thiết kế website và ứng dụng di động chuyên nghiệp",
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality:
        "Cạnh 29E1, Đường F5, Khu Dân Cư 3A, Phường An Bình, Thành phố Cần Thơ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Vietnamese",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
