import React from "react";
export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="font-bold text-lg">JS</span>
            </div>
            <span className="font-semibold text-xl">Portfolio</span>
          </div>
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} All Rights Reserved. Designed and built
            with ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};
