import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react";
import { GlassCard } from "../../components/UI/GlassCard";

const Testimonial = ({ quote, name, course, university, image }) => {
  return (
    <GlassCard
      className="p-8 md:p-10"
      glowColor="from-blue-500/30 to-teal-500/30"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <QuoteIcon size={32} className="text-blue-400 mb-4" />
          <p className="text-white/80 text-lg mb-6 italic leading-relaxed">
            "{quote}"
          </p>
          <div>
            <h4 className="text-xl font-semibold">{name}</h4>
            <p className="text-white/60">
              {course} | {university}
            </p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "Vision Assignment Help was instrumental in my academic success. Their guidance on my research methodology helped me secure a distinction in my final project. I highly recommend their services to any student struggling with complex assignments.",
      name: "Michael Chen",
      course: "MSc Computer Science",
      university: "University of Technology",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "I was struggling with balancing my part-time job and studies until I found Vision Assignment Help. Their exam preparation materials and study guides were exactly what I needed. My grades improved significantly, and I felt much more confident during exams.",
      name: "Sarah Miller",
      course: "BA Business Administration",
      university: "State University",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "The proofreading service provided by Vision Assignment Help transformed my dissertation. Their attention to detail and suggestions for improvement were invaluable. I received excellent feedback from my professors on the clarity and structure of my work.",
      name: "James Wilson",
      course: "PhD Environmental Science",
      university: "Global University",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-teal-500 blur-[100px] opacity-10" />
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
            <span className="text-white/80">Student Feedback</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Hear what our students say about their experience with our services
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -20,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Testimonial {...testimonials[currentIndex]} />
          </motion.div>
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/15 transition-all"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <ChevronLeftIcon size={20} />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/15 transition-all"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <ChevronRightIcon size={20} />
            </motion.button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-500 w-6" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
