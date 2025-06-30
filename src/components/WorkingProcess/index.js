"use client";

import { useLottie } from "lottie-react";
import * as workflowNextStep from "@/assets/workflow-next-step.json";

const WorkingProcess = () => {
  const { View: View_1 } = useLottie({
    animationData: JSON.parse(JSON.stringify(workflowNextStep)),
    loop: true,
    autoplay: true,
    style: {
      height: "100%",
      width: "100%",
    },
  });
  const { View: View_2 } = useLottie({
    animationData: JSON.parse(JSON.stringify(workflowNextStep)),
    loop: true,
    autoplay: true,
    style: {
      height: "100%",
      width: "100%",
    },
  });
  const { View: View_3 } = useLottie({
    animationData: JSON.parse(JSON.stringify(workflowNextStep)),
    loop: true,
    autoplay: true,
    style: {
      height: "100%",
      width: "100%",
    },
  });
  const { View: View_4 } = useLottie({
    animationData: JSON.parse(JSON.stringify(workflowNextStep)),
    loop: true,
    autoplay: true,
    style: {
      height: "100%",
      width: "100%",
    },
  });
  const { View: View_5 } = useLottie({
    animationData: JSON.parse(JSON.stringify(workflowNextStep)),
    loop: true,
    autoplay: true,
    style: {
      height: "100%",
      width: "100%",
    },
  });

  return (
    <section className="container-fluid bg-grey-light py-5">
      <div className="d-flex flex-column container mb-3 align-items-center flex-wrap justify-content-center">
        <h2>Quy trình làm việc</h2>
        <p className="text-content col-sm-12 col-lg-6 text-center">
          Quy trình thiết kế website, ứng dụng và phần mềm của SmartCode
          Solutions được xây dựng bài bản và chuyên nghiệp, từ việc tìm hiểu yêu
          cầu khách hàng đến triển khai và bảo trì.
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7 col-sm-3 col-lg-2 col-xl-1">
            <div className="bg-white rounded-circle mb-3 d-flex justify-content-center align-items-center p-5 p-sm-4 p-xl-3 position-relative">
              <img
                src="/images/workflow-step-01.png"
                className="img-fluid w-75 h-75"
              />
              <div className="d-flex bg-primary rounded-circle justify-content-center align-items-center badge mobile-hidden">
                <span className="text">1</span>
              </div>
            </div>
            <div>
              <p className="text-content text-center">
                Tư vấn và phân tích yêu cầu
              </p>
            </div>
          </div>
          <div className="col-1 mobile-hidden">{View_1}</div>
          <div className="col-7 col-sm-3 col-lg-2 col-xl-1">
            <div className="bg-white rounded-circle mb-3 d-flex justify-content-center align-items-center p-5 p-sm-4 p-xl-3 position-relative">
              <img
                src="/images/workflow-step-02.png"
                className="img-fluid w-100 h-100"
              />
              <div className="d-flex bg-primary rounded-circle justify-content-center align-items-center badge mobile-hidden">
                <span className="text">2</span>
              </div>
            </div>
            <div>
              <p className="text-content text-center">Thiết kế UI/UX</p>
            </div>
          </div>
          <div className="col-1 mobile-hidden">{View_2}</div>
          <div className="col-7 col-sm-3 col-lg-2 col-xl-1">
            <div className="bg-white rounded-circle mb-3 d-flex justify-content-center align-items-center p-5 p-sm-4 p-xl-3 position-relative">
              <img
                src="/images/workflow-step-03.png"
                className="img-fluid w-100 h-100"
              />
              <div className="d-flex bg-primary rounded-circle justify-content-center align-items-center badge mobile-hidden">
                <span className="text">3</span>
              </div>
            </div>
            <div>
              <p className="text-content text-center">Demo thiết kế</p>
            </div>
          </div>
          <div className="col-1 mobile-hidden">{View_3}</div>
          <div className="col-7 col-sm-3 col-lg-2 col-xl-1">
            <div className="bg-white rounded-circle mb-3 d-flex justify-content-center align-items-center p-5 p-sm-4 p-xl-3 position-relative">
              <img
                src="/images/workflow-step-04.png"
                className="img-fluid w-100 h-100"
              />
              <div className="d-flex bg-primary rounded-circle justify-content-center align-items-center badge mobile-hidden">
                <span className="text">4</span>
              </div>
            </div>
            <div>
              <p className="text-content text-center">Lập trình</p>
            </div>
          </div>
          <div className="col-1 mobile-hidden">{View_4}</div>
          <div className="col-7 col-sm-3 col-lg-2 col-xl-1">
            <div className="bg-white rounded-circle mb-3 d-flex justify-content-center align-items-center p-5 p-sm-4 p-xl-3 position-relative">
              <img
                src="/images/workflow-step-05.png"
                className="img-fluid w-100 h-100"
              />
              <div className="d-flex bg-primary rounded-circle justify-content-center align-items-center badge mobile-hidden">
                <span className="text">5</span>
              </div>
            </div>
            <div>
              <p className="text-content text-center">Bàn giao sản phẩm</p>
            </div>
          </div>
          <div className="col-1 mobile-hidden">{View_5}</div>
          <div className="col-7 col-sm-3 col-lg-2 col-xl-1">
            <div className="bg-white rounded-circle mb-3 d-flex justify-content-center align-items-center p-5 p-sm-4 p-xl-3 position-relative">
              <img
                src="/images/workflow-step-06.png"
                className="img-fluid w-100 h-100"
              />
              <div className="d-flex bg-primary rounded-circle justify-content-center align-items-center badge mobile-hidden">
                <span className="text">6</span>
              </div>
            </div>
            <div>
              <p className="text-content text-center">Bảo hành/Bảo trì</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
