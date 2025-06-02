"use client";

import { useState } from "react";
import data from "./data.json";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState(data);

  console.log(tabs);

  return (
    <div className="container-fluid bg-light">
      <section className="d-flex flex-column container pt-3 pb-3 align-items-center flex-wrap justify-content-center">
        <div className="col-sm-12 col-lg-6 mb-lg-3 mb-xl-3">
          <h1 className="text-center">Dịch vụ</h1>
          <p className="text-center">
            Tham khảo bảng dịch vụ của chúng tôi để tìm hiểu các gói dịch vụ đa
            dạng, từ cơ bản đến nâng cao, phù hợp với mọi nhu cầu và ngân sách.
          </p>
        </div>

        <div className="d-flex col-sm-12 col-lg-8 mb-lg-3 mb-xl-3 bg-white rounded rounded-5 p-1 justify-content-between flex-wrap tab shadow">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`col-auto ${
                activeTab == index ? `active` : ``
              } rounded rounded-5 p-2 bg-animation cursor-pointer`}
              onClick={setActiveTab.bind(null, index)}
            >
              <p className="text-center">{tab?.name}</p>
            </div>
          ))}
        </div>

        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              index == activeTab ? `d-flex` : `d-none`
            } flex-row container-fluid pt-3 pb-3 flex-wrap justify-content-between`}
          >
            {tab.packages.map((packageItem, packageIndex) => (
              <div
                key={packageIndex}
                className="col-sm-10 col-lg-3 shadow rounded rounded-3 p-2 mb-3"
                style={{ width: "22%" }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <p>{packageItem?.title}</p>
                  <button className="btn btn-primary">Liên hệ</button>
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
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};
export default Services;
