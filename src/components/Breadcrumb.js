"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  const breadcrumbMap = {
    "/": "Trang chủ",
    "/about": "Về chúng tôi",
    "/services": "Dịch vụ",
    "/contact": "Liên hệ",
    "/working-process": "Quy trình làm việc",
    "/client-pathway": "Lộ trình hợp tác",
    "/privacy-policy": "Chính sách bảo mật",
    "/terms-of-service": "Điều khoản dịch vụ",
  };

  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean);
    const breadcrumbs = [
      { name: "Trang chủ", href: "/", current: pathname === "/" },
    ];

    let currentPath = "";
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const name =
        breadcrumbMap[currentPath] ||
        path.charAt(0).toUpperCase() + path.slice(1);
      breadcrumbs.push({
        name,
        href: currentPath,
        current: index === paths.length - 1,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav
      className="bg-gray-50 border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 py-3">
          <ol className="flex items-center space-x-4">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.href}>
                <div className="flex items-center">
                  {index > 0 && (
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  )}
                  {breadcrumb.current ? (
                    <span
                      className="ml-4 text-sm font-medium text-gray-500"
                      aria-current="page"
                    >
                      {breadcrumb.name}
                    </span>
                  ) : (
                    <Link
                      href={breadcrumb.href}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {breadcrumb.name}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
