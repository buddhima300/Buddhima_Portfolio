import React, { useState } from "react";
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";

const Testimonial = ({ quote, name, position, company, image }) => {
  return (
    <div className="px-4">
      <GlassCard className="p-8">
        <div className="flex flex-col items-center text-center">
          <QuoteIcon size={32} className="text-blue-400 mb-6" />
          <p className="text-white/80 text-lg mb-8 italic">"{quote}"</p>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 mb-4">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="text-white/60">
            {position} at {company}
          </p>
        </div>
      </GlassCard>
    </div>
  );
};
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "Working with this developer was a pleasure. They consistently delivered high-quality code and creative solutions to our complex problems.",
      name: "Alex Johnson",
      position: "CTO",
      company: "TechStart Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "An exceptional developer who not only writes clean, efficient code but also brings innovative ideas to the table. They're a true asset to any development team.",
      name: "Sarah Miller",
      position: "Product Manager",
      company: "InnovateTech",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "Their attention to detail and commitment to writing maintainable, scalable code is impressive. They're not just a developer; they're a problem solver who thinks about the big picture.",
      name: "Michael Chen",
      position: "Lead Developer",
      company: "SoftSolutions",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
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
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-blue-500 blur-[100px] opacity-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            What others say about working with me
          </p>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <Testimonial {...testimonials[currentIndex]} />
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/15 transition-all"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/15 transition-all"
            >
              <ChevronRightIcon size={20} />
            </button>
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
