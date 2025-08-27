import React from "react";
import backpic from "../assets/back1.jpg";

const Hero = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat px-6 relative"
      style={{ backgroundImage: `url(${backpic})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.65)_100%)]"></div>

      <div className="relative z-10 p-8 md:p-12 rounded-xl max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Build the Future with CODEMAP
        </h2>

        <p className="text-white text-center max-w-xl mx-auto mb-6 text-lg md:text-xl drop-shadow-md">
          We create modern, scalable web solutions for startups and businesses.
        </p>

        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
