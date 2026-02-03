import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import { GlassCard } from "../../components/UI/GlassCard";

const CaseStudy = ({
  title,
  client,
  description,
  image,
  technologies,
  outcome,
  index,
}) => {
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
      <GlassCard className="overflow-hidden group">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-auto">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </div>
          <div className="p-6">
            <div className="text-blue-400 text-sm mb-2">{client}</div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-white/70 mb-4">{description}</p>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white/90 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white/90 mb-2">
                Outcome:
              </h4>
              <p className="text-white/70 text-sm">{outcome}</p>
            </div>
            <motion.a
              href="#"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors mt-2"
              whileHover={{
                x: 5,
              }}
            >
              <span>View Case Study</span>
              <ExternalLinkIcon size={16} />
            </motion.a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
export const Projects = () => {
  const caseStudies = [
    {
      title: "Enterprise Resource Planning System",
      client: "Global Manufacturing Corp",
      description:
        "Designed and implemented a comprehensive ERP system to streamline operations, inventory management, and supply chain processes.",
      image:
        "https://images.unsplash.com/photo-1664575599736-c5197c684172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      outcome:
        "Reduced operational costs by 35% and improved inventory accuracy to 99.8%",
    },
    {
      title: "AI-Powered Customer Service Platform",
      client: "TechRetail Inc",
      description:
        "Developed an AI chatbot and customer service automation platform to handle inquiries and provide personalized recommendations.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: [
        "TensorFlow",
        "Python",
        "React",
        "MongoDB",
        "Google Cloud",
      ],
      outcome: "Customer response time reduced by 78% with 92% resolution rate",
    },
    {
      title: "Secure Healthcare Data Platform",
      client: "MediCare Solutions",
      description:
        "Built a HIPAA-compliant healthcare data management system with advanced security features and patient portal.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Auth0", "Azure"],
      outcome:
        "Achieved 100% compliance with healthcare regulations and improved data access time by 65%",
    },
  ];
  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-cyan-500 blur-[100px] opacity-10" />
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
            <span className="text-white/80">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Explore how we've helped businesses transform their operations and
            achieve their goals
          </p>
        </motion.div>
        <div className="space-y-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              title={study.title}
              client={study.client}
              description={study.description}
              image={study.image}
              technologies={study.technologies}
              outcome={study.outcome}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
