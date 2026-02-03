import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { GlassCard } from "../../components/UI/GlassCard";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  type,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
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
      <GlassCard
        className="overflow-hidden group h-full flex flex-col"
        whileHover={{
          y: -10,
        }}
      >
        <div className="h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-auto"
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3">{title} </h3>
          <span className="text-sm w-32 text-white bg-gradient-to-r from-green-500 to-blue-500 px-2 py-1 rounded-md">
            {type}
          </span>
          <p className="text-white/70 mb-4 line-clamp-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/5 backdrop-blur-sm rounded-md text-xs text-white/80 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            {demoLink === "#" ? (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex pointer-events-none items-center gap-1 px-3 py-2 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <ExternalLinkIcon size={14} />
                Not Published
              </motion.a>
            ) : (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <ExternalLinkIcon size={14} />
                View Demo
              </motion.a>
            )}
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-sm font-medium hover:bg-white/15 transition-all"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <GithubIcon size={14} />
                Source Code
              </motion.a>
            )}
          </div>
          <Link
            className="flex items-center gap-2 justify-end mt-5 text-blue-500 underline"
            to={`/projects/${title}`}
          >
            view Details
            <ExternalLinkIcon size={16} />
          </Link>
        </div>
      </GlassCard>
    </motion.div>
  );
};
export const Projects = ({ sectionData }) => {
  return (
    <section id="projects" className="py-20 relative">
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
            <span className="text-white/80">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Recent Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sectionData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              type={project.type}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
