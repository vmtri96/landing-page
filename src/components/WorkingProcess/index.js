"use client";

const AnalyzeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);
const UiUxIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
    />
  </svg>
);
const DemoIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);
const ImplementIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);
const ReleaseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);
const MaintainIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const WorkingProcess = () => {
  const processSteps = [
    { id: 1, name: "Phân tích", icon: <AnalyzeIcon /> },
    { id: 2, name: "Thiết kế UI/UX", icon: <UiUxIcon /> },
    { id: 3, name: "Demo thiết kế", icon: <DemoIcon /> },
    { id: 5, name: "Bàn giao", icon: <ReleaseIcon /> },
    { id: 4, name: "Lập trình", icon: <ImplementIcon /> },
    { id: 6, name: "Bảo trì", icon: <MaintainIcon /> },
  ];

  const Card = ({ step }) => (
    <div className="bg-white rounded-lg p-3 w-56 flex items-center gap-4 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-md">
        {step.icon}
      </div>
      <p className="text-gray-800 font-semibold text-sm leading-tight">
        {step.name}
      </p>
    </div>
  );

  return (
    <section className="bg-gray-900 py-16 lg:py-24 overflow-hidden relative">
      <div
        className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] bg-no-repeat"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(147, 197, 253, 0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/4 flex-shrink-0 z-10">
            <div className="lg:sticky top-8 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-white my-4">
                Quy trình làm việc
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Quy trình được xây dựng bài bản và chuyên nghiệp, từ việc tìm
                hiểu yêu cầu đến triển khai và bảo trì.
              </p>
            </div>
          </div>

          <div className="lg:w-3/4 relative mt-12 lg:mt-0 flex flex-col justify-center min-h-[450px]">
            {/* Row 1 */}
            <div className="flex justify-between w-full items-center z-[2]">
              <Card step={processSteps[0]} />
              <div className="flex-grow h-0 border-t-2 border-dashed border-gray-600 mx-2"></div>
              <Card step={processSteps[1]} />
              <div className="flex-grow h-0 border-t-2 border-dashed border-gray-600 mx-2"></div>
              <Card step={processSteps[2]} />
            </div>

            {/* Row 2 */}
            <div className="flex justify-center w-full my-16 items-center z-[2]">
              <Card step={processSteps[3]} />
              <div className="w-24 h-0 border-t-2 border-dashed border-gray-600"></div>
              <Card step={processSteps[4]} />
            </div>

            {/* Row 3 */}
            <div className="flex justify-center w-full z-[2]">
              <Card step={processSteps[5]} />
            </div>

            {/* Dotted Connection Lines */}
            <div className="absolute inset-0 hidden lg:block">
              <div className="absolute top-[90px] right-[-3rem] h-[138px] w-[13rem] border-b-2 border-r-2 border-t-2 border-dashed border-gray-600 rounded-br-3xl rounded-tr-3xl"></div>
              <div className="absolute top-[225px] left-[6.5rem] h-[138px] w-[13rem] border-t-2 border-l-2 border-b-2 border-dashed border-gray-600 rounded-tl-3xl rounded-bl-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
