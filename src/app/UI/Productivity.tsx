import React from "react";

const Productivity = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 pt-20">
        <h2 className="text-7xl font-bold text-center text-gray-800">
          Productivity that flows
          <br />
          with your life.
        </h2>
        <p className="text-2xl font-medium text-center w-120 text-gray-600">
          Unleash your potential by harmonizing your daily tasks and habits with
          your unique energy rhythms.
        </p>
        <a
          className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider mb-8 md:mb-10"
          rel="noreferrer"
          href="https://prismic.io"
        >
          Try for free
        </a>
        <img className="shadow-2xl w-220" src="/img1.avif" />
      </div>
    </>
  );
};

export default Productivity;
