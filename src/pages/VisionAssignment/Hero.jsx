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
      {/* Custom background for Vision Assignment */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#001a33] via-[#002b4d] to-[#001a33] opacity-80 pointer-events-none" />
      {/* Academic-themed background elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 20 L40 20 M20 0 L20 40"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      {/* Floating academic icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-white/10 text-5xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          📚
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 text-white/10 text-5xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🎓
        </motion.div>
        <motion.div
          className="absolute top-2/3 right-1/3 text-white/10 text-5xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          💻
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-white/10 text-5xl"
          animate={{
            y: [0, -12, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          ✏️
        </motion.div>
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
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-teal-400 rounded-lg flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
              <span className="text-4xl font-bold">VA</span>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80')] opacity-20 mix-blend-overlay"></div>
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-teal-200 to-blue-300 bg-clip-text text-transparent"
          >
            Vision Assignment Help
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
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90">
              Your Academic Success, Our Priority
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive academic support services to help
              students excel in their studies, from assignment assistance to
              research guidance and exam preparation.
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
              glowColor="from-blue-500/30 to-teal-500/30"
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
