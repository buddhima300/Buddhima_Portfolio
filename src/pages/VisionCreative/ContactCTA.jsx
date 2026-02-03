import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";
import { GlassCard, GlassButton } from "../../components/UI/GlassCard";
import { Link } from "react-router-dom";
export const ContactCTA = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30 pointer-events-none" />
      <div className="container mx-auto px-4">
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
          }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard
            className="p-8 md:p-12 text-center"
            glowColor="from-purple-500/30 to-pink-600/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Create Together
            </h2>
            <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto">
              Ready to elevate your brand with stunning creative work? Our team
              is excited to bring your vision to life.
            </p>
            <Link to="/contact">
              <GlassButton
                primary
                className="text-lg px-8 py-4 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600"
              >
                Start Your Project
                <SparklesIcon size={20} />
              </GlassButton>
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
