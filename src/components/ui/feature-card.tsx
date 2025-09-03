import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FeatureCard = ({ title, description, icon, className, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut",
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 1,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "relative group cursor-target",
        "bg-gradient-paper p-6 rounded-2xl border-2",
        "border-paper-lines dark:border-paper-lines",
        "shadow-paper hover:shadow-sketch transition-all duration-300",
        className
      )}
    >
      {/* Hand-drawn corner decoration */}
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-pencil-blue rounded-tr-lg opacity-50" />
      
      <div className="flex items-start gap-4">
        <motion.div
          className="flex-shrink-0 w-12 h-12 bg-pencil-blue/10 rounded-xl flex items-center justify-center border border-pencil-blue/20"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-pencil-blue text-xl">
            {icon}
          </div>
        </motion.div>
        
        <div className="flex-1">
          <h3 className="font-caveat font-bold text-lg text-pencil-graphite mb-2 group-hover:text-pencil-blue transition-colors">
            {title}
          </h3>
          <p className="font-kalam text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Sketched underline effect */}
      <motion.div
        className="absolute bottom-2 left-6 right-6 h-0.5 bg-pencil-blue/20 rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};