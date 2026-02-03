import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon, MailIcon, GlobeIcon } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 relative py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="font-bold text-lg">VP</span>
              </div>
              <span className="font-semibold text-xl">Vision Portfolio</span>
            </Link>
            <p className="text-white/60 mb-6">
              Showcasing excellence across software development, creative
              design, and academic support.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{
                  y: -3,
                }}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
              >
                <GithubIcon size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{
                  y: -3,
                }}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
              >
                <LinkedinIcon size={18} />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{
                  y: -3,
                }}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
              >
                <MailIcon size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{
                  y: -3,
                }}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
              >
                <GlobeIcon size={18} />
              </motion.a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Main Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-m-tech"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Vision M Tech
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-creative"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Vision Creative
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-assignment"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Vision Assignment
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/vision-m-tech"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-creative"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Creative Design
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-assignment"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Academic Support
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/60">
                <MailIcon size={16} />
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-white transition-colors"
                >
                  contact@example.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <GlobeIcon size={16} />
                <a href="#" className="hover:text-white transition-colors">
                  www.visionportfolio.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Vision Portfolio. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
