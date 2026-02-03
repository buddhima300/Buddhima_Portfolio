import React from "react";
import { motion } from "framer-motion";
import { HelpCircleIcon } from "lucide-react";
import { GlassCard, GlassButton } from "../../components/UI/GlassCard";
import { Link } from "react-router-dom";
export const ContactCTA = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-teal-900/30 pointer-events-none" />
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
            glowColor="from-blue-500/30 to-teal-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Help Now
            </h2>
            <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto">
              Don't struggle with your academic challenges alone. Our expert
              team is ready to provide the support you need to succeed.
            </p>
            <Link to="/contact">
              <GlassButton
                primary
                className="text-lg px-8 py-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500"
              >
                Request Academic Support
                <HelpCircleIcon size={20} />
              </GlassButton>
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
