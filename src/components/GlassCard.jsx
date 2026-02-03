import React from "react";

export const GlassCard = ({
  children,
  className = "",
  glowColor = "from-blue-500/30 to-purple-600/30",
}) => {
  return (
    <div
      className={`relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-white/20 ${className}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-20 pointer-events-none -z-10 group-hover:opacity-30 transition-opacity ${glowColor}`}
      />
      {/* Animated corner accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-md group-hover:scale-150 transition-all duration-700"></div>
      {children}
    </div>
  );
};

export const GlassButton = ({
  children,
  className = "",
  primary = false,
  onClick,
}) => {
  return primary ? (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all relative overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></span>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 font-medium hover:bg-white/15 transition-all relative overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
};
// Custom shape mask components
export const HexagonMask = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="hexagon-mask overflow-hidden">{children}</div>
      <style jsx>{`
        .hexagon-mask {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
export const CircleMask = ({ children, className = "" }) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
export const DiamondMask = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="diamond-mask overflow-hidden">{children}</div>
      <style jsx>{`
        .diamond-mask {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
export const BlobMask = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="blob-mask overflow-hidden">{children}</div>
      <style jsx>{`
        .blob-mask {
          clip-path: path(
            "M 90,10 C 25,10 10,25 10,90 10,155 25,170 90,170 155,170 170,155 170,90 170,25 155,10 90,10 Z"
          );
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
