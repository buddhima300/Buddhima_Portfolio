import React from "react";
import { motion } from "framer-motion";
import {
  PaletteIcon,
  TagIcon,
  MegaphoneIcon,
  InstagramIcon,
} from "lucide-react";
import { GlassCard } from "../../components/UI/GlassCard";

const ServiceCard = ({ title, icon, description, features, index }) => {
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
        className="p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
        whileHover={{
          y: -10,
        }}
        glowColor="from-purple-500/30 to-pink-600/30"
      >
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-white/70 mb-6">{description}</p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{
              x: 5,
            }}
            className="text-purple-400 text-sm flex items-center gap-1 hover:text-purple-300 transition-colors mt-auto"
          >
            <span>Learn more</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </motion.button>
        </div>
      </GlassCard>
    </motion.div>
  );
};
export const Services = () => {
  const services = [
    {
      title: "Graphic Design",
      icon: <PaletteIcon size={28} className="text-white" />,
      description:
        "Eye-catching visual designs that communicate your brand message effectively.",
      features: [
        "Logo & Identity Design",
        "Print Materials",
        "Packaging Design",
        "Illustration",
      ],
    },
    {
      title: "Branding",
      icon: <TagIcon size={28} className="text-white" />,
      description:
        "Comprehensive branding strategies that establish a strong, cohesive identity.",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Brand Guidelines",
        "Brand Positioning",
      ],
    },
    {
      title: "Digital Marketing",
      icon: <MegaphoneIcon size={28} className="text-white" />,
      description:
        "Data-driven marketing campaigns that increase visibility and drive conversions.",
      features: [
        "Content Marketing",
        "SEO & SEM",
        "Email Campaigns",
        "Analytics & Reporting",
      ],
    },
    {
      title: "Social Media",
      icon: <InstagramIcon size={28} className="text-white" />,
      description:
        "Strategic social media management to build community and boost engagement.",
      features: [
        "Content Creation",
        "Community Management",
        "Paid Social Campaigns",
        "Influencer Marketing",
      ],
    },
  ];
  return (
    <section id="services" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-purple-500 blur-[100px] opacity-10" />
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
            <span className="text-white/80">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            We provide a full spectrum of creative services to elevate your
            brand and connect with your audience
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
