import React from "react";
import { motion } from "framer-motion";
import {
  CodeIcon,
  BrainIcon,
  UsersIcon,
  BrainCircuit,
  GraduationCap,
  Focus,
} from "lucide-react";
import { GlassCard } from "../../components/UI/GlassCard";
import profilePic from "../../assets/profile_new.jpg";
import SkillsStatistics from "./SkillsStatistics";
export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-purple-600 blur-[100px] opacity-10" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
        </motion.div>
        <GlassCard className="max-w-6xl mx-auto p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              className="relative"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="w-80 h-auto rounded-lg overflow-hidden border-4 border-white/10 relative z-10">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 -z-10"></div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-500 uppercase">
                Junior Software Engineer
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed text-justify">
                Junior Software Engineer specializing in React.js and Node.js
                with six months of industry experience delivering
                production-ready web features. Contributed to frontend
                architecture and module development by implementing reusable
                components and clean, maintainable code. Experience working with
                JavaScript (ES6+), Express. js, MongoDB, and SQL databases in
                Agile development environments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                    <CodeIcon size={28} className="text-orange-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Coding</h4>
                  <p className="text-white/60 text-sm">
                    Crafting clean, efficient, and maintainable code
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                    <BrainIcon size={28} className="text-orange-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Problem Solving</h4>
                  <p className="text-white/60 text-sm">
                    Finding innovative solutions to complex challenges
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                    <UsersIcon size={28} className="text-orange-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Teamwork</h4>
                  <p className="text-white/60 text-sm">
                    Collaborating effectively to achieve shared goals
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                    <GraduationCap size={28} className="text-orange-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Fast learning</h4>
                  <p className="text-white/60 text-sm">
                    Easily adapting to complex environments.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                    <BrainCircuit size={28} className="text-orange-400" />
                  </div>
                  <h4 className="font-semibold mb-2">
                    Passionate about learning
                  </h4>
                  <p className="text-white/60 text-sm">
                    Continuous learning and Adapting to new emerging
                    technologies.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                    <Focus size={28} className="text-orange-400" />
                  </div>
                  <h4 className="font-semibold mb-2">
                    Detail-oriented Development
                  </h4>
                  <p className="text-white/60 text-sm">
                    Focus on In-depth of Problem for Solving
                  </p>
                </div>
              </div>
              <SkillsStatistics />
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
