import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardIcon,
  BookOpenIcon,
  TargetIcon,
  EditIcon,
} from "lucide-react";
import { GlassCard } from "../../components/UI/GlassCard";

const ServiceCard = ({ title, icon, description, features, index }) => {
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
        delay: index * 0.1,
      }}
    >
      <GlassCard
        className="p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
        whileHover={{
          y: -10,
        }}
        glowColor="from-blue-500/30 to-teal-500/30"
      >
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-white/70 mb-6">{description}</p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{
              x: 5,
            }}
            className="text-blue-400 text-sm flex items-center gap-1 hover:text-blue-300 transition-colors mt-auto"
          >
            <span>Learn more</span>
            <svg
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
            </svg>
          </motion.button>
        </div>
      </GlassCard>
    </motion.div>
  );
};
export const Services = () => {
  const services = [
    {
      title: "Assignment Support",
      icon: <ClipboardIcon size={28} className="text-white" />,
      description:
        "Comprehensive assistance with academic assignments across various subjects and disciplines.",
      features: [
        "Essay Writing",
        "Case Studies",
        "Technical Reports",
        "Literature Reviews",
      ],
    },
    {
      title: "Research Guidance",
      icon: <BookOpenIcon size={28} className="text-white" />,
      description:
        "Expert guidance on research methodologies, data collection, and analysis for academic projects.",
      features: [
        "Research Design",
        "Data Analysis",
        "Literature Search",
        "Methodology Selection",
      ],
    },
    {
      title: "Exam Preparation",
      icon: <TargetIcon size={28} className="text-white" />,
      description:
        "Structured study plans and materials to help students prepare effectively for examinations.",
      features: [
        "Study Guides",
        "Practice Questions",
        "Mock Tests",
        "Revision Strategies",
      ],
    },
    {
      title: "Proofreading & Editing",
      icon: <EditIcon size={28} className="text-white" />,
      description:
        "Thorough review and enhancement of academic documents to ensure clarity and accuracy.",
      features: [
        "Grammar Correction",
        "Citation Formatting",
        "Structure Improvement",
        "Plagiarism Check",
      ],
    },
  ];
  return (
    <section id="services" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-blue-500 blur-[100px] opacity-10" />
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
            <span className="text-white/80">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            We provide comprehensive academic support services to help you excel
            in your educational journey
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
