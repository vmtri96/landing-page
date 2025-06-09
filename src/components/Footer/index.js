'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4">
            <div className="mb-4">
              <img
                src="/images/trans-logo-white.png"
                alt="Smart Code Solutions"
                style={{ width: '180px', height: 'auto' }}
                className="mb-3"
              />
              <p>
                Smart Code Solutions cung cấp giải pháp phần mềm tùy chỉnh, tối ưu hiệu suất và trải nghiệm người dùng.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <h5 className="mb-3">Thông tin liên hệ</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Ninh Kiều, TP. Cần Thơ
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                0973 023 736
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                smartcodesolutions.vn@gmail.com
              </li>
              <li className="mb-2">
                <i className="bi bi-clock me-2"></i>
                Thứ 2 - Thứ 6, 09:00 - 18:30
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4">
            <h5 className="mb-3">Liên kết nhanh</h5>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link href="#" className="text-light text-decoration-none">
                      Dịch vụ
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="text-light text-decoration-none">
                      Tin tức
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="text-light text-decoration-none">
                      Giới thiệu
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="text-light text-decoration-none">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link href="/contact" className="text-light text-decoration-none">
                      Liên hệ
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/privacy" className="text-light text-decoration-none">
                      Chính sách bảo mật
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/terms" className="text-light text-decoration-none">
                      Điều khoản sử dụng
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="row mt-4">
          <div className="col-lg-6">
            <h5 className="mb-3">Đăng ký nhận tin</h5>
            <p className="mb-3">
              Nhận ngay thông tin ưu đãi & cập nhật mới nhất!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="d-flex gap-2">
              <input
                type="email"
                className="form-control w-75"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Đăng ký
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h5 className="mb-3 text-lg-end text-start">Kết nối với chúng tôi</h5>
            <div className="d-flex justify-content-lg-end justify-content-start gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4 pt-4 border-top">
          <div className="col-12 text-center">
            <p className="mb-3">
              © {new Date().getFullYear()} Smart Code Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
