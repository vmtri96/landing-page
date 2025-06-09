"use client";

import Link from "next/link";
import { useState } from "react";
import data from "./data.json";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState(data);

  return (
    <div className="container-fluid bg-light">
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 mb-3">
            <h2 className="text-center">Dịch vụ</h2>
            <p className="text-center">
              Tham khảo bảng dịch vụ của chúng tôi để tìm hiểu các gói dịch vụ
              đa dạng, từ cơ bản đến nâng cao, phù hợp với mọi nhu cầu và ngân
              sách.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-10 mb-lg-3 mb-xl-3 tab">
            <div className="rounded rounded-5 p-2 shadow">
              <div className="row justify-content-center">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`col-xs-12 col-md-6 col-xl-3`}
                    onClick={setActiveTab.bind(null, index)}
                  >
                    <div
                      className={`${
                        activeTab == index ? `active` : ``
                      } rounded rounded-5 bg-animation cursor-pointer p-1`}
                    >
                      <p className="text-center">{tab?.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              index == activeTab ? `d-flex` : `d-none`
            } container-fluid py-3`}
          >
            <div className="row">
              {tab.packages.map((packageItem, packageIndex) => (
                <div
                  key={packageIndex}
                  className="col-xs-12 col-sm-6 col-xl-3 mb-4"
                >
                  <div className="shadow rounded rounded-3 p-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <p>{packageItem?.title}</p>
                      <Link className="btn btn-primary" href="#contact">
                        Liên hệ
                      </Link>
                    </div>
                    <hr />
                    {packageItem?.contents.map((content, contentIndex) => (
                      <div
                        key={contentIndex}
                        className="d-flex align-items-center gap-2"
                      >
                        {content?.check ? (
                          <i className="bi bi-check-lg text-success"></i>
                        ) : (
                          <i className="bi bi-x-lg text-danger"></i>
                        )}
                        <p>{content.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Services;
