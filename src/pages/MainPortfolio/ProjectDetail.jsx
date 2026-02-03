// src/pages/MainPortfolio/ProjectDetail.jsx
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Code,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

const ProjectDetail = ({ sectionData }) => {
  const { title } = useParams();
  const project = sectionData.find((proj) => proj.title === title);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Project not found
          </h2>
          <button className="mt-4 text-blue-600 hover:text-blue-700">
            Go Back
          </button>
        </div>
      </div>
    );
  }
  const openLightbox = (index) => {
    setCurrentMediaIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentMediaIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentMediaIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const currentMedia = project.gallery?.[currentMediaIndex];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                {project.date && (
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                )}
                {project.role && (
                  <div className="flex items-center gap-1">
                    <Tag size={16} />
                    <span>{project.role}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  <ExternalLink size={18} />
                  <span>View Demo</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md"
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className=" aspect-auto object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.description}
              </p>
              {project.detailedDescription && (
                <p className="text-gray-700 leading-relaxed">
                  {project.detailedDescription}
                </p>
              )}
            </div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="relative group cursor-pointer overflow-hidden rounded-lg aspect-auto bg-gray-100"
                    >
                      <img
                        src={item.type === "video" ? item.thumbnail : item.url}
                        alt={item.caption || `Gallery item ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                          <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                            <Play size={24} className="text-gray-800 ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="text-white text-sm font-medium">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && (
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="text-blue-600" size={24} />
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges & Outcome */}
            {(project.challenges || project.outcome) && (
              <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
                {project.challenges && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Challenges
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Outcome
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code className="text-blue-600" size={20} />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentMedia && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft size={48} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight size={48} />
              </button>
            </>
          )}

          {/* Media Content */}
          <div
            className="max-w-5xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {currentMedia.type === "video" ? (
              <video
                src={currentMedia.url}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={currentMedia.url}
                alt={currentMedia.caption || "Gallery image"}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}

            {/* Caption */}
            {currentMedia.caption && (
              <div className="mt-4 text-center">
                <p className="text-white text-lg">{currentMedia.caption}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {currentMediaIndex + 1} / {project.gallery.length}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
