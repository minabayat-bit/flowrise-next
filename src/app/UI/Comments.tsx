import React from "react";

const Comments = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-20 p-6 mt-20">
      <h2 className="text-5xl font-bold text-gray-800">What our users say</h2>
      <div className="flex flex-row gap-6">
        <div className="border border-gray-300 bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16">
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            "Flowrise has made burnout a thing of the past. It's a game-changer
            for work-life balance. It's not just a productivity app—it's a
            lifestyle enhancer."
          </p>
          <div className="flex items-center gap-4">
            <img className="rounded-full" src="ayesha.avif" />
            <div>
              <p className="text-base font-medium text-slate-700">Ayesha W.</p>
              <p className="text-base text-slate-600">
                Digital Marketing Specialist
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
          <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
            "Before Flowrise, I was always running against the clock. Now, I
            work in harmony with my natural rhythms. My productivity and
            wellbeing have never been better!"
          </p>
          <div className="flex items-center gap-4">
            <img className="rounded-full" src="mark.avif" />
            <div>
              <p className="text-base font-medium text-slate-700">Mark R.</p>
              <p className="text-base text-slate-600">Nonprofit founder</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
          <p className="text-xl md:text-2xl text-slate-600 mb-8 ">
            "Flowrise has revolutionized my workday! It adapts to my energy and
            helps me optimize my daily tasks. I'm more productive and happier
            than ever!"
          </p>
          <div className="flex items-center gap-4">
            <img className="rounded-full" src="emily.avif" />
            <div>
              <p className="text-base font-medium text-slate-700">Emily W.</p>
              <p className="text-base text-slate-600">UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
