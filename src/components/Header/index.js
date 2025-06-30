"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState([
    { name: "Trang chủ", link: "#", active: true },
    { name: "Dịch vụ", link: "#" },
    { name: "Tin tức", link: "#" },
    { name: "Giới thiệu", link: "#" },
    { name: "FAQs", link: "#" },
  ]);
  const [open, setOpen] = useState(false);

  return (
    <header className="container-fluid sticky-top">
      <nav className="navbar navbar-expand-lg border-bottom py-md-3 ">
        <div className="container">
          <Link className="navbar-brand me-md-5" href="#">
            <img src="/images/trans-logo.png" alt="logo here" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={setOpen.bind(null, !open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menu.map((item, index) => (
                <li className="nav-item me-md-4" key={index}>
                  <Link
                    className={`nav-link ${item.active ? "active" : ""}`}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center gap-4">
              <span className="border-start border-end border-secondary-subtle px-4">
                <i className="bi bi-telephone"></i>
                <p className="d-inline-block ms-2">0973 023 736</p>
              </span>
              <Link
                className="btn btn-primary rounded-pill px-3 py-2"
                href="#contact"
              >
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="d-flex container-fluid bg-primary pt-3 pb-3 justify-content-center mobile-hidden">
        <div className="d-flex container">
          <div className="w-auto text-white me-auto">
            <p>
              <i className="bi bi-telephone"></i> Số điện thoại: 0973023736 |{" "}
              <i className="bi bi-envelope-check"></i> Email:
              smartcodesolutions.vn@gmail.com
            </p>
          </div>
          <div className="w-auto text-white ms-auto">
            <i className="bi bi-facebook me-3"></i>
            <i className="bi bi-github"></i>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <img src="/images/trans-logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={setOpen.bind(null, !open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menu.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link ${item.active ? "active" : ""}`}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="btn btn-primary" href="#contact">
              Liên hệ
            </Link>
          </div>
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
