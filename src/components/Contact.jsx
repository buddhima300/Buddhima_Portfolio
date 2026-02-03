import React from "react";
import {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  GlobeIcon,
  SendIcon,
} from "lucide-react";
import { GlassCard, GlassButton } from "./GlassCard";
export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-purple-600 blur-[100px] opacity-10" />
      <div className="absolute bottom-1/3 right-10 w-64 h-64 rounded-full bg-blue-500 blur-[100px] opacity-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white/70 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-white/70 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <GlassButton primary className="flex items-center gap-2">
                  <SendIcon size={16} />
                  Send Message
                </GlassButton>
              </form>
            </GlassCard>
          </div>
          <div className="lg:col-span-2">
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <MailIcon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-white/70 hover:text-blue-400 transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <LinkedinIcon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <a
                      href="#"
                      className="text-white/70 hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <GithubIcon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">GitHub</h4>
                    <a
                      href="#"
                      className="text-white/70 hover:text-blue-400 transition-colors"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <GlobeIcon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Website</h4>
                    <a
                      href="#"
                      className="text-white/70 hover:text-blue-400 transition-colors"
                    >
                      yourportfolio.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
                  >
                    <GlobeIcon size={18} />
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
