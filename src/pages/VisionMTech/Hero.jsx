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
      {/* Custom background for Vision M Tech */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 pointer-events-none" />
      {/* Circuit board overlay */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 pointer-events-none mix-blend-screen" />
      {/* Animated tech elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 border border-cyan-500/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
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
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
              <span className="text-4xl font-bold">VM</span>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] opacity-20 mix-blend-overlay"></div>
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent"
          >
            Vision M Tech Solutions
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
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90">
              Bespoke Software Solutions for Every Business
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              We build cutting-edge software solutions tailored to your business
              needs, from web and mobile applications to AI-powered systems and
              cloud infrastructure.
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
