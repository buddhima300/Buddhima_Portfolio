import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { GlassButton } from "./GlassCard";
import TextType from "./TextType";
export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    // Trigger load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
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
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-blue-500 blur-[100px] opacity-20" />
      <div className="absolute bottom-1/3 left-10 w-64 h-64 rounded-full bg-purple-600 blur-[100px] opacity-20" />
      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating shapes */}
        <div
          className="absolute w-20 h-20 border border-blue-500/20 rounded-full top-1/4 left-1/4 animate-float"
          style={{
            transform: `translate(${calculateMovement(
              "x",
              -30
            )}px, ${calculateMovement("y", -30)}px)`,
          }}
        ></div>
        <div
          className="absolute w-32 h-32 border border-purple-500/20 rounded-full bottom-1/4 right-1/4 animate-float-delay"
          style={{
            transform: `translate(${calculateMovement(
              "x",
              40
            )}px, ${calculateMovement("y", 40)}px)`,
          }}
        ></div>
        <div
          className="absolute w-16 h-16 border border-cyan-500/20 rounded-full top-1/3 right-1/3 animate-float-slow"
          style={{
            transform: `translate(${calculateMovement(
              "x",
              -20
            )}px, ${calculateMovement("y", -20)}px)`,
          }}
        ></div>
        {/* Code symbols */}
        <div className="absolute top-1/4 right-1/4 text-blue-500/10 text-6xl font-mono animate-float">{`{ }`}</div>
        <div className="absolute bottom-1/3 left-1/3 text-purple-500/10 text-6xl font-mono animate-float-delay">{`</>`}</div>
        <div className="absolute top-2/3 right-1/3 text-cyan-500/10 text-4xl font-mono animate-float-slow">{`()`}</div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center p-2 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10">
            <div size={84} className="text-blue-400 mr-2" />
            <TextType
              text={["Hello, 👋 I'm", "Buddhima Chathuranga Lakmal"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-white/70 text-2xl md:text-4xl uppercase"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent relative">
            <span className="relative inline-block bg-gradient-to-r from-[#e81b24] to-[#396ce9] bg-clip-text">
              Full-Stack Developer
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </span>{" "}
            <span className="relative inline-block">
              UI/UX Designer
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
            </span>{" "}
            <span className="relative inline-block">
              Quick Learner
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
            2+ years of experience building scalable, user-friendly web
            applications using React.js, Node.js, and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton primary onClick={scrollToProjects}>
              📂 View My Work
            </GlassButton>
            <GlassButton onClick={scrollToContact}>
              📧 Let's Connect
            </GlassButton>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon size={32} className="text-white/50" />
        </div>
      </div>
    </section>
  );
};
