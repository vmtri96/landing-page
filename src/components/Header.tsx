'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="relative w-[120px] h-[50px] md:w-[150px] md:h-[60px]">
              <Image
                src="/images/trans-logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-600 hover:text-red-500 transition-colors">
              Trang chủ
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-red-500 transition-colors">
              Giới thiệu
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-red-500 transition-colors">
              Dịch vụ
            </Link>
            <Link href="#blog" className="text-gray-600 hover:text-red-500 transition-colors">
              Blog/Tin tức
            </Link>
            <Link href="#faqs" className="text-gray-600 hover:text-red-500 transition-colors">
              FAQs
            </Link>
            <Link href="#contact" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
              Liên hệ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#home" className="text-gray-600 hover:text-red-500 transition-colors">
                Trang chủ
              </Link>
              <Link href="/#about" className="text-gray-600 hover:text-red-500 transition-colors">
                Giới thiệu
              </Link>
              <Link href="/#services" className="text-gray-600 hover:text-red-500 transition-colors">
                Dịch vụ
              </Link>
              <Link href="#blog" className="text-gray-600 hover:text-red-500 transition-colors">
                Blog/Tin tức
              </Link>
              <Link href="#faqs" className="text-gray-600 hover:text-red-500 transition-colors">
                FAQs
              </Link>
              <Link href="#contact" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors text-center">
                Liên hệ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
