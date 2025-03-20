import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Link href={"/"}>
            <div className="relative w-[120px] h-[50px] md:w-[150px] md:h-[60px]">
              <Image
                src="/images/trans-logo-white.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Dịch vụ Phát triển Phần mềm Tùy Chỉnh
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Dịch vụ Phát triển Website & Ứng dụng Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Dịch vụ Phát triển Ứng dụng Di Động (Mobile App)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Dịch vụ Bảo trì & Nâng cấp Phần mềm
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Gói Phát Triển Phần Mềm Theo Số Lượng Chức Năng & Màn Hình
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Công ty</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog/Tin tức
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ & Hỗ trợ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:smartcodesolutions@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Email: smartcodesolutions@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} SmartCode Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
