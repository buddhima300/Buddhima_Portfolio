import React from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";
import { GlassCard, DiamondMask } from "../../components/UI/GlassCard";

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  skills,
  isLast = false,
  logo,
  index,
}) => {
  return (
    <motion.div
      className="relative"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
    >
      {!isLast && (
        <div className="absolute top-0 left-6 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>
      )}
      <div className="flex gap-6">
        <div className="relative z-10">
          <div className="relative">
            <DiamondMask className="w-15 h-15">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                {logo ? (
                  <img
                    src={logo}
                    alt={company}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <BriefcaseIcon size={20} className="text-white" />
                )}
              </div>
            </DiamondMask>
            <motion.div
              className="absolute inset-0 w-12 h-12"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="diamond-gradient"
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
                  points="50 0, 100 50, 50 100, 0 50"
                  fill="none"
                  stroke="url(#diamond-gradient)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="flex-1 pb-12">
          <GlassCard
            className="p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-y-[-5px]"
            whileHover={{
              y: -5,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
              <h3 className="text-xl font-bold">
                {title} | {company}
              </h3>
              <div className="flex items-center text-white/60 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                {period}
              </div>
            </div>
            <p className="text-white/70 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
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
                    delay: 0.05 * index,
                  }}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10 hover:bg-white/10 transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
              <motion.button
                className="text-blue-400 text-sm flex items-center gap-1 hover:text-blue-300 transition-colors"
                whileHover={{
                  x: 5,
                }}
              >
                {/* <span>View Details</span> */}
                {/* <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg> */}
              </motion.button>
            </div>
          </GlassCard>
        </div>
      </div>
    </motion.div>
  );
};
export const Experience = ({ sectionData }) => {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-purple-600 blur-[100px] opacity-10" />
      {/* Animated grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 h-full w-full opacity-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-l border-white/5 h-full"></div>
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-6 h-full w-full opacity-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-t border-white/5 w-full"></div>
        ))}
      </div>
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
            <span className="text-white/80">Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {sectionData.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              skills={exp.skills}
              isLast={index === sectionData.length - 1}
              logo={exp.logo}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
