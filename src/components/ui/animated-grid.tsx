import React from "react";
import { motion } from "framer-motion";

export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="hsl(var(--paper-lines))"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeDasharray="2,2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 0.6, 0.3],
                x: [0, 100],
                y: [0, 100]
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </pattern>
          
          {/* Animated grid pattern with hand-drawn feel */}
          <pattern
            id="rough-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 0 0 L 80 2 M 2 0 L 0 80"
              fill="none"
              stroke="hsl(var(--pencil-blue))"
              strokeWidth="0.8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                x: [0, -40],
                y: [0, -40]
              }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.8" />
        <rect width="100%" height="100%" fill="url(#rough-grid)" opacity="0.3" />
      </svg>

      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-8 bg-pencil-blue/20"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--paper-lines)) 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, hsl(var(--paper-lines)) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, hsl(var(--pencil-graphite)) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px',
        }}
      />
    </div>
  );
};