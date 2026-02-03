import React from "react";
import { motion } from "framer-motion";
import {
  Code2Icon,
  ServerIcon,
  DatabaseIcon,
  GitBranchIcon,
  LayoutIcon,
  CloudIcon,
  BotIcon,
  ShieldIcon,
} from "lucide-react";
import { GlassCard, HexagonMask } from "../../components/UI/GlassCard";

const SkillCard = ({ title, icon, skills, delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
      }}
    >
      <GlassCard className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group hover:translate-y-[-5px]">
        <div className="flex flex-col h-full">
          <div className="mb-6 relative">
            <HexagonMask className="w-16 h-16 mx-auto">
              <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
                {icon}
              </div>
            </HexagonMask>
            <motion.div
              className="absolute inset-0 w-16 h-16 mx-auto"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="opacity-50"
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
            </motion.div>
          </div>
          <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-auto justify-center">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 * index + delay * 0.1,
                }}
                className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-xl text-sm text-white/80 border border-white/10 group-hover:border-blue-500/30 transition-all hover:bg-white/10"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2Icon size={24} className="text-blue-400" />,
      skills: [
        "React Js",
        "Next.js - Beginner",
        "Axios",
        "Tailwind CSS",
        "Chakra UI",
        "Material UI",
        "JavaScript",
        "Bootstrap",
        "CSS",
        "HTML",
        "Redux",
      ],
    },
    {
      title: "Backend",
      icon: <ServerIcon size={24} className="text-purple-400" />,
      skills: [
        "Node.js",
        "Express",
        "JWT",
        "REST APIs",
        "Authentication",
        "Python",
        "Django",
        "Fast API",
      ],
    },
    {
      title: "Database",
      icon: <DatabaseIcon size={24} className="text-green-400" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "SQL"],
    },
    {
      title: "DevOps",
      icon: <GitBranchIcon size={24} className="text-yellow-400" />,
      skills: ["Git", "AWS"],
    },
    {
      title: "UI/UX",
      icon: <LayoutIcon size={24} className="text-pink-400" />,
      skills: ["Figma", "Responsive Design", "Accessibility"],
    },
    {
      title: "Cloud",
      icon: <CloudIcon size={24} className="text-cyan-400" />,
      skills: ["AWS", "Firebase", "Vercel", "Netlify"],
    },
    {
      title: "AI/ML",
      icon: <BotIcon size={24} className="text-indigo-400" />,
      skills: [
        "TensorFlow.js",
        "Yolo11 Object Detection",
        "Data Visualization",
      ],
    },
    {
      title: "Security",
      icon: <ShieldIcon size={24} className="text-red-400" />,
      skills: ["Auth0", "JWT", "Cryptography"],
    },
  ];
  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-blue-500 blur-[100px] opacity-10" />
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full border border-blue-500/20 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full border border-purple-500/20 opacity-30"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-white/5 backdrop-blur-md rounded-full mb-4 border border-white/10">
            <span className="text-white/80">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            I've developed expertise in various technologies across the full
            software development stack
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
