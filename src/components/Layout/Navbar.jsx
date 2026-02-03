import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Vision M Tech",
      path: "/vision-m-tech",
    },
    {
      name: "Vision Creative",
      path: "/vision-creative",
    },
    {
      name: "Vision Assignment",
      path: "/vision-assignment",
    },
  ];
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d0d0d]/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="font-bold text-lg">VP</span>
          </div>
          <span className="font-semibold text-xl">Vision Portfolio</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-2 py-1 ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              } transition-colors`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="md:hidden absolute top-full left-0 w-full bg-[#0d0d0d]/95 backdrop-blur-lg border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-white/70"
                } hover:text-white transition-colors py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
