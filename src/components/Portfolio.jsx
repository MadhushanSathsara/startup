import React from "react";
import portfolio from "../data/portfolio.json";

const Portfolio = () => {
  return (
    <div
      className="py-20 px-6 text-center
        bg-[radial-gradient(circle_at_50%_20%,
          oklch(92%_0.06_210)_0%,
          oklch(85%_0.04_210)_60%,
          oklch(80%_0.02_210)_100%)]"
    >
      <h3 className="text-3xl font-bold mb-12 text-gray-900">Our Work</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {portfolio.map((project, idx) => {
          const img = require(`../assets/${project.img}`);
          return (
            <div
              key={idx}
              className="relative group p-0 rounded-xl overflow-hidden shadow-lg
                transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={img}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-[oklch(0%_0.0_0/0.5)] opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 flex flex-col justify-center items-center p-4"
              >
                <h4 className="text-white font-semibold text-xl mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-200 text-sm mb-2">
                  {project.description || project.tags.join(", ")}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-[oklch(92%_0.03_220)] opacity-0 group-hover:opacity-20 rounded-xl"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
