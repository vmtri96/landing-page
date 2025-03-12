import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nâng Tầm Doanh Nghiệp Với Giải Pháp Hiện Đại
            </h1>
            <p className="text-lg text-gray-600 mb-8">
            Chúng tôi giúp doanh nghiệp phát triển và đổi mới với các giải pháp phần mềm tiên tiến được tùy chỉnh theo nhu cầu của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#about" className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors cursor-pointer">
                Bắt Đầu
              </Link>
              {/* <button className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-full hover:bg-red-50 transition-colors cursor-pointer">
                Tìm Hiểu Thêm
              </button> */}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/images/overview.svg"
                alt="Hero illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

