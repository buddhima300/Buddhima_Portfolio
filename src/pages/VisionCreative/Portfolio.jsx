import React, { useState } from "react";
import { motion } from "framer-motion";
import { ZoomInIcon } from "lucide-react";
import { GlassCard } from "../../components/UI/GlassCard";

const PortfolioItem = ({ image, title, category, index }) => {
  return (
    <motion.div
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
        delay: index * 0.1,
      }}
      className="overflow-hidden rounded-xl group relative"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative aspect-square"
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-white/70">{category}</p>
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <ZoomInIcon size={24} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Branding",
    "Graphic Design",
    "Digital Marketing",
    "Social Media",
  ];
  const portfolioItems = [
    {
      image:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Eco Minimalist Rebrand",
      category: "Branding",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Modern Packaging Design",
      category: "Graphic Design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Tech Startup Campaign",
      category: "Digital Marketing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
      title: "Fashion Brand Identity",
      category: "Branding",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: "Social Media Content Series",
      category: "Social Media",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Product Catalog Design",
      category: "Graphic Design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Email Marketing Campaign",
      category: "Digital Marketing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: "Influencer Collaboration",
      category: "Social Media",
    },
  ];
  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);
  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-pink-500 blur-[100px] opacity-10" />
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
            <span className="text-white/80">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portfolio Showcase
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Explore our creative projects and see how we've helped brands stand
            out
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border ${
                activeCategory === category
                  ? "border-purple-500 bg-purple-500/20"
                  : "border-white/10 bg-white/5"
              } transition-all`}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
