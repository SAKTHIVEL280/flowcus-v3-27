import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/ui/hero-illustration";

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="flex justify-start items-center">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 relative hero-container w-full"
        >
          <div className="space-y-4 sm:space-y-6 relative">
            {/* Main Headlines */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-pencil-graphite leading-[0.9] tracking-tight hero-text"
            >
              <span className="hero-other-text">Stay in </span>
              <motion.span 
                className="flow-span text-pencil-orange relative inline-block font-arkhip cursor-target transition-all duration-300 hover:scale-110"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                  filter: 'drop-shadow(0 0 0px hsl(var(--pencil-orange)))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 140, 0, 0.8))';
                  e.currentTarget.style.color = 'rgb(255, 140, 0)';
                  document.querySelectorAll('.hero-other-text, .hero-description, .focus-span').forEach(el => {
                    (el as HTMLElement).style.opacity = '0.1';
                    (el as HTMLElement).style.transition = 'all 0.8s ease';
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0px hsl(var(--pencil-orange)))';
                  e.currentTarget.style.color = 'hsl(var(--pencil-orange))';
                  document.querySelectorAll('.hero-other-text, .hero-description, .focus-span').forEach(el => {
                    (el as HTMLElement).style.opacity = '1';
                  });
                }}
              >
                FLOW
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-pencil-graphite leading-[0.9] tracking-tight hero-text"
            >
              <span className="hero-other-text">Stay in </span>
              <motion.span 
                className="focus-span text-pencil-blue relative inline-block font-arkhip cursor-target transition-all duration-300 hover:scale-110"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  filter: 'drop-shadow(0 0 0px hsl(var(--pencil-blue)))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(0, 100, 200, 0.8))';
                  e.currentTarget.style.color = 'rgb(0, 100, 200)';
                  document.querySelectorAll('.hero-other-text, .hero-description, .flow-span').forEach(el => {
                    (el as HTMLElement).style.filter = 'blur(8px)';
                    (el as HTMLElement).style.transition = 'all 0.8s ease';
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0px hsl(var(--pencil-blue)))';
                  e.currentTarget.style.color = 'hsl(var(--pencil-blue))';
                  document.querySelectorAll('.hero-other-text, .hero-description, .flow-span').forEach(el => {
                    (el as HTMLElement).style.filter = 'none';
                  });
                }}
              >
                FOCUS
              </motion.span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-md sm:max-w-lg leading-relaxed font-normal hero-description"
          >
            Transform your productivity with our intelligent pomodoro timer that adapts to your rhythm and keeps you in the perfect flow state.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 hero-description"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" className="shadow-sketch">
                Start Focus Session
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="paper" size="xl" className="shadow-paper">
                View Dashboard
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};