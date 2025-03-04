import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with Modern Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We help businesses scale and innovate with cutting-edge software solutions tailored to their needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors cursor-pointer">
                Get Started
              </button>
              <button className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-full hover:bg-red-50 transition-colors cursor-pointer">
                Learn More
              </button>
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

