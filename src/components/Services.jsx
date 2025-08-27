import React from "react";
import services from "../data/services.json";
import * as FaIcons from "react-icons/fa";

const Services = () => {
  return (
    <div
      className="py-20 px-6 text-center
        bg-[linear-gradient(135deg,
  oklch(85%_0.05_210)_0%,
  oklch(80%_0.04_180)_50%,
  oklch(85%_0.05_160)_100%)]"
    >
      <h3 className="text-3xl text-gray-900 font-bold mb-12">Our Services</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = FaIcons[service.icon];

          return (
            <div
              key={index}
              className="relative group p-6 bg-[oklch(92%_0.03_220)] rounded-xl shadow-lg
                hover:bg-[oklch(88%_0.04_220)] transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {Icon && (
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[oklch(50%_0.08_220/0.2)] 
                  flex items-center justify-center text-[oklch(50%_0.08_220)] text-3xl transition-all duration-300
                  group-hover:scale-110 group-hover:bg-[oklch(50%_0.08_220/0.3)]">
                  <Icon />
                </div>
              )}

              <h4 className="font-semibold text-lg mb-2 text-gray-900 transition-colors duration-300 group-hover:text-[oklch(50%_0.08_220)]">
                {service.title}
              </h4>

              <p className="text-gray-700 text-sm">{service.description}</p>

              {service.highlights && (
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {service.highlights.map((hl, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
