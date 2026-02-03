import React from 'react';
import { UserCircleIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';
export const About = () => {
  return <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-purple-600 blur-[100px] opacity-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        <GlassCard className="max-w-6xl mx-auto p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative">
              <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white/10 relative z-10">
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 -z-10"></div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center justify-center p-2 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10">
                <UserCircleIcon size={20} className="text-blue-400 mr-2" />
                <span className="text-white/80">Who I Am</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Passionate Software Engineer
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                I'm a dedicated software engineer with a passion for creating
                elegant solutions to complex problems. My journey in tech began
                with a fascination for how digital experiences can transform the
                way we interact with the world.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                I specialize in full-stack development with a focus on creating
                intuitive user interfaces and robust backend systems. My
                approach combines technical expertise with creative
                problem-solving to deliver applications that not only work
                flawlessly but also provide exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
                  Problem Solver
                </span>
                <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
                  Team Player
                </span>
                <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
                  Continuous Learner
                </span>
                <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
                  Detail-Oriented
                </span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>;
};