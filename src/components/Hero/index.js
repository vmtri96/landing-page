const Hero = () => {
  return (
    <section className="d-flex container py-5 align-items-center flex-wrap justify-content-center">
      <div className="col-sm-12 col-lg-6 mb-lg-3 mb-xl-0">
        <div className="d-flex bg-primary text-white rounded-circle mb-3 justify-content-center align-items-center icon">
          <i className="bi bi-buildings-fill"></i>
        </div>
        <p className="text-primary fw-bold">SmartCode Solutions</p>
        <h2 className="text-primary">
          Giải pháp công nghệ thông minh - SmartCode Solutions
        </h2>
        <p className="text-content mb-3">
          SmartCode Solutions mang đến giải pháp thiết kế website, ứng dụng và
          phần mềm chuyên nghiệp, tối ưu SEO và trải nghiệm người dùng. Hãy bắt
          đầu hành trình số hóa doanh nghiệp của bạn!
        </p>
        <button className="btn btn-primary">Liên hệ ngay</button>
      </div>
      <div className="col-6 mobile-hidden ps-3">
        <img
          src="/images/overview.svg"
          alt="Hero Image"
          className="img-fluid"
        />
      </div>
    </section>
  );
};

export default Hero;
