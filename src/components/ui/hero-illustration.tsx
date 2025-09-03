import React from "react";
import { motion } from "framer-motion";

export const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main paper sheet */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-80 h-96 bg-gradient-paper rounded-2xl shadow-float border-2 border-paper-lines"
      >
        {/* Grid lines on paper */}
        <div className="absolute inset-4">
          {/* Horizontal lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`h-${i}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              className="absolute w-full h-px bg-paper-lines/40"
              style={{ top: `${i * 6.67}%` }}
            />
          ))}
          
          {/* Vertical lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`v-${i}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.03 }}
              className="absolute h-full w-px bg-paper-lines/40"
              style={{ left: `${i * 11.11}%` }}
            />
          ))}
        </div>

        {/* Sketched timer icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-16 left-1/2 transform -translate-x-1/2"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="text-pencil-blue"
          >
            <motion.circle
              cx="30"
              cy="30"
              r="25"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray="157"
              strokeDashoffset="157"
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="origin-center"
            />
            <motion.line
              x1="30"
              y1="30"
              x2="30"
              y2="15"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            />
            <motion.line
              x1="30"
              y1="30"
              x2="42"
              y2="30"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
          </svg>
        </motion.div>

        {/* Hand-drawn focus waves */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 0.8 + i * 0.2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeOut"
              }}
              className="absolute rounded-full border-2 border-pencil-blue/30"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
              }}
            />
          ))}
          
          <div className="w-8 h-8 bg-pencil-blue rounded-full relative z-10" />
        </motion.div>

        {/* Pencil marks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="absolute bottom-8 right-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pencil-red rounded-full" />
            <div className="w-2 h-2 bg-pencil-green rounded-full" />
            <div className="w-2 h-2 bg-pencil-orange rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating pencil */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute -top-8 -right-8"
      >
        <motion.div
          animate={{ y: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-4 bg-gradient-to-r from-pencil-orange to-pencil-red rounded-full shadow-sketch"
        >
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-1 bg-pencil-graphite rounded-r-full" />
        </motion.div>
      </motion.div>

      {/* Floating sticky notes */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 30, rotate: -15 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -10 }}
        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
        className="absolute -bottom-12 -left-8"
      >
        <motion.div
          animate={{ rotate: [-10, -8, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-pencil-orange/20 rounded-lg border-2 border-pencil-orange shadow-paper"
        >
          <div className="p-2">
            <div className="w-full h-1 bg-pencil-orange/40 rounded mb-1" />
            <div className="w-3/4 h-1 bg-pencil-orange/40 rounded mb-1" />
            <div className="w-1/2 h-1 bg-pencil-orange/40 rounded" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};