import React from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { experiences, projects, educations } from "../../data/MainPortfolio";
import { Education } from "../../components/Education";
import ScrollVelocity from "../../components/UI/ScrollVelocity";
import ScrollStack, { ScrollStackItem } from "../../components/UI/ScrollStack";
import Certifications from "./Certifications";
import { certifications, achievements } from "../../data/MainPortfolio";
import { motion } from "framer-motion";
export const MainPortfolio = () => {
  const velocity = 50;
  return (
    <>
      <Hero />
      <About />
      <Experience sectionData={experiences} />
      <Projects sectionData={projects} />
      <Education sectionData={educations} />
      <Skills />
      <div className="px-20">
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
            <span className="text-white/80">
              Acheivments and Certifications
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Recent Acheivments
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my acheivments and
            Leaderships
          </p>
        </motion.div>
        <ScrollVelocity
          texts={["Full Stack Developer | React.js | Node.js | Express.js"]}
          velocity={velocity}
          className="custom-scroll-text text-9xl text-white/15"
        />
        <ScrollStack>
          <ScrollStackItem>
            <Certifications
              Title={"Certifications"}
              color={
                "bg-orange-500/20 border border-orange/10 backdrop-blur-md"
              }
              sectionData={certifications}
            />
          </ScrollStackItem>
          <ScrollStackItem>
            <Certifications
              Title={"Volunteering and Leaderships"}
              color={"bg-amber-500/50 border border-amber/10 backdrop-blur-md"}
              sectionData={achievements}
            />
          </ScrollStackItem>
          {/* <ScrollStackItem>
            <Certifications
              Title={"Collaborations"}
              color={"bg-blue-500/50 border border-white/10 backdrop-blur-md"}
              sectionData={sports}
            />
          </ScrollStackItem> */}
        </ScrollStack>
      </div>
      <Contact />
    </>
  );
};
