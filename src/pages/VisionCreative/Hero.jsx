import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { GlassButton } from "../../components/UI/GlassCard";
export const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative pt-20 pb-10 overflow-hidden">
      {/* Custom background for Vision Creative */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1a0033] via-[#330033] to-[#000033] opacity-80 pointer-events-none" />
      {/* Animated liquid wave background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C30,60 70,40 100,50 L100,100 L0,100 Z"
            fill="url(#gradient1)"
            animate={{
              d: [
                "M0,50 C30,60 70,40 100,50 L100,100 L0,100 Z",
                "M0,45 C30,55 70,45 100,45 L100,100 L0,100 Z",
                "M0,50 C30,40 70,60 100,50 L100,100 L0,100 Z",
                "M0,50 C30,60 70,40 100,50 L100,100 L0,100 Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,70 C20,65 50,75 100,70 L100,100 L0,100 Z"
            fill="url(#gradient2)"
            animate={{
              d: [
                "M0,70 C20,65 50,75 100,70 L100,100 L0,100 Z",
                "M0,75 C20,80 50,70 100,75 L100,100 L0,100 Z",
                "M0,70 C30,75 70,65 100,70 L100,100 L0,100 Z",
                "M0,70 C20,65 50,75 100,70 L100,100 L0,100 Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500/10"
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-pink-500/10"
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold">VC</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300 bg-clip-text text-transparent"
          >
            Vision Creative Design
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            className="mb-10"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90">
              Creativity Meets Strategy
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              We blend artistic vision with strategic thinking to create
              compelling brand experiences that captivate audiences and drive
              meaningful engagement.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <GlassButton
              primary
              onClick={scrollToServices}
              className="text-lg px-8 py-4"
              glowColor="from-purple-500/30 to-pink-600/30"
            >
              Explore Our Services
            </GlassButton>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ChevronDownIcon size={32} className="text-white/50" />
        </motion.div>
      </div>
    </section>
  );
};
