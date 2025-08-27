import React from "react";
import { FaLightbulb, FaGem, FaUsers } from "react-icons/fa";

const About = () => {
  const values = [
    { title: "Innovation", icon: FaLightbulb },
    { title: "Quality", icon: FaGem },
    { title: "Teamwork", icon: FaUsers },
  ];

  return (
    <div
      className="py-20 px-6
        bg-[linear-gradient(135deg,
          oklch(92%_0.06_210)_0%,
          oklch(85%_0.04_210)_50%,
          oklch(88%_0.05_200)_100%)]"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h3 className="text-3xl text-gray-900 font-bold mb-4">About Us</h3>
        <p className="text-gray-800 mb-12">
          CODEMAP is a young startup passionate about delivering high-quality web
          solutions tailored to your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="relative group p-6 bg-[oklch(95%_0.03_210)] hover:bg-[oklch(90%_0.05_210)]
                  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >

                <div className="w-16 h-16 mx-auto mb-4 rounded-full
                  bg-[oklch(50%_0.08_220/0.2)] flex items-center justify-center
                  text-indigo-500 text-4xl transition-all duration-300 group-hover:scale-110
                  group-hover:bg-[oklch(50%_0.08_220/0.3)]">
                  <Icon />
                </div>

                <h4 className="font-semibold text-lg text-gray-900">{value.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
