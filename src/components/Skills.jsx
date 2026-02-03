import React, { useEffect, useState } from "react";
import { GlobeIcon, CogIcon, DatabaseIcon, WrenchIcon } from "lucide-react";
import { GlassCard, HexagonMask } from "./GlassCard";

const SkillCard = ({ title, skills, icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <GlassCard className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group hover:translate-y-[-5px]">
        <div className="flex flex-col h-full">
          <div className="mb-6 relative">
            {/* Unique hexagon shape with animated border */}
            <HexagonMask className="w-16 h-16 mx-auto">
              <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
                {icon}
              </div>
            </HexagonMask>
            {/* Animated border */}
            <div className="absolute inset-0 w-16 h-16 mx-auto">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="animate-spin-slow opacity-50"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50 3, 90 25, 90 75, 50 97, 10 75, 10 25"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-auto justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10 group-hover:border-blue-500/30 transition-all hover:bg-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <GlobeIcon size={24} className="text-blue-400" />,
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux"],
    },
    {
      title: "Backend",
      icon: <CogIcon size={24} className="text-purple-400" />,
      skills: ["Node.js", "Express", "GraphQL", "REST APIs", "Authentication"],
    },
    {
      title: "Database",
      icon: <DatabaseIcon size={24} className="text-green-400" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "SQL"],
    },
    {
      title: "Tools & Others",
      icon: <WrenchIcon size={24} className="text-yellow-400" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Testing"],
    },
  ];
  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-blue-500 blur-[100px] opacity-10" />
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full border border-blue-500/20 animate-ping-slow opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full border border-purple-500/20 animate-ping-slow opacity-30" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-white/5 backdrop-blur-md rounded-full mb-4 border border-white/10">
            <span className="text-white/80">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            I've developed expertise in various technologies across the full
            software development stack
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 200} // Staggered animation delay
            />
          ))}
        </div>
      </div>
    </section>
  );
};
