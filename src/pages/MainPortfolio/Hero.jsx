import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShinyText from "../../components/ShinyText";
import {
  ChevronDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { GlassCard, GlassButton } from "../../components/UI/GlassCard";
import ProfileCard from "../../components/UI/ProfileCard";
import profileImage from "../../assets/Professional_pro.png";
import ContactPopup from "./ContactPopup";
export const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const calculateMovement = (axis, factor) => {
    const center =
      axis === "x" ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === "x" ? mousePosition.x : mousePosition.y;
    return (position - center) / factor;
  };
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative pt-20 pb-10 overflow-hidden"
    >
      {/* Background Elements */}
      {/* <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-blue-500  opacity-20" />
      <div className="absolute bottom-1/3 left-10 w-64 h-64 rounded-full bg-purple-600 opacity-20" /> */}
      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating shapes */}
        <motion.div
          className="absolute w-20 h-20 border border-blue-500/20 rounded-full top-1/4 left-1/4"
          animate={{
            x: calculateMovement("x", -30),
            y: calculateMovement("y", -30),
            transition: {
              type: "spring",
              stiffness: 50,
            },
          }}
        />
        <motion.div
          className="absolute w-32 h-32 border border-purple-500/20 rounded-full bottom-1/4 right-1/4"
          animate={{
            x: calculateMovement("x", 40),
            y: calculateMovement("y", 40),
            transition: {
              type: "spring",
              stiffness: 30,
            },
          }}
        />
        <motion.div
          className="absolute w-16 h-16 border border-cyan-500/20 rounded-full top-1/3 right-1/3"
          animate={{
            x: calculateMovement("x", -20),
            y: calculateMovement("y", -20),
            transition: {
              type: "spring",
              stiffness: 70,
            },
          }}
        />
        {/* Code symbols */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-blue-500/10 text-6xl font-mono"
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {`{ }`}
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-purple-500/10 text-6xl font-mono"
          animate={{
            y: [0, -15, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          {`</>`}
        </motion.div>
        <motion.div
          className="absolute top-2/3 right-1/3 text-cyan-500/10 text-4xl font-mono"
          animate={{
            y: [0, -8, 0],
            transition: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            },
          }}
        >
          {`()`}
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
          className="max-w-3xl mx-auto text-center"
        >
          <GlassCard
            className="p-8 md:p-12 max-w-3xl mx-auto"
            initial={{
              scale: 0.9,
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
          >
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
            >
              {/* <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-white/80 mb-1 uppercase font-semibold">
                Junior Software Engineer
              </p>
              <p className="text-sm md:text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8 uppercase ">
                Specialize in React Js
              </p> */}
              <div className="flex justify-center">
                <ProfileCard
                  name="LKC.BUDDHIMA"
                  title="Software Engineer"
                  handle="MERN STACK"
                  status="Online"
                  contactText="Info"
                  avatarUrl={profileImage}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => setIsPopupOpen(true)}
                />
                <ContactPopup
                  isOpen={isPopupOpen}
                  onClose={() => setIsPopupOpen(false)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <GlassButton primary onClick={scrollToProjects}>
                  View My Projects
                </GlassButton>
                <GlassButton onClick={scrollToContact}>Contact Me</GlassButton>
              </div>
            </motion.div>
          </GlassCard>
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
