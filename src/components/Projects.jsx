import React from "react";
import { Code2Icon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { GlassCard, GlassButton } from "./GlassCard";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
}) => {
  return (
    <GlassCard className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/70 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <ExternalLinkIcon size={14} />
              View Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-sm font-medium hover:bg-white/15 transition-all"
            >
              <GithubIcon size={14} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};
export const Projects = () => {
  const projects = [
    {
      title: "SmartTask – Task Management App",
      description:
        "A collaborative task management application with real-time updates, customizable workflows, and analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "FinTrack – Personal Finance Tracker",
      description:
        "A comprehensive finance tracking application with budget planning, expense categorization, and visual reports.",
      image:
        "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: [
        "React",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "Chart.js",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "DevConnect – Developer Network",
      description:
        "A social platform for developers to connect, share projects, and collaborate. Features include profiles, posts, and messaging.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React", "Node.js", "GraphQL", "MongoDB", "JWT"],
      demoLink: "#",
      githubLink: "#",
    },
  ];
  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-blue-500 blur-[100px] opacity-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-white/5 backdrop-blur-md rounded-full mb-4 border border-white/10">
            <Code2Icon size={20} className="text-blue-400 mr-2" />
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <GlassButton>View All Projects</GlassButton>
        </div>
      </div>
    </section>
  );
};
