import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 80 },
      { name: "HTML / CSS / JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js / Express.js", level: 75 },
      { name: "MongoDB", level: 60 },
      { name: "Python & Django REST", level: 50 },
      { name: "FastAPI", level: 50 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Docker & DevOps Basics", level: 25 },
      { name: "Figma / UI Design", level: 80 },
      { name: "Agile / Scrum", level: 60 },
    ],
  },
];

function SkillsStatistics() {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setAnimationTriggered(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills-section" className="py-16 w-full">
      {/* <h2 className="text-4xl font-bold text-center text-gray-100 mb-12 uppercase">
        Stats
      </h2> */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-indigo-100 mb-4 text-center">
              {category.category}
            </h3>

            <div className="space-y-5">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-100 text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: animationTriggered ? `${skill.level}%` : 0,
                      }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-800"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsStatistics;
