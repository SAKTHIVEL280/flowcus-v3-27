import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Squares from "@/components/ui/squares";
import { BackgroundPlus } from "@/components/ui/background-plus";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { CTASection } from "@/components/ui/cta-section";

const Index = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const savedTheme = localStorage.getItem("flowcus-theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    } else {
      // Set dark theme as default
      localStorage.setItem("flowcus-theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("flowcus-theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <div className={`min-h-screen bg-background transition-all duration-500 ${isDarkTheme ? 'dark' : ''} relative overflow-hidden`}>
      {/* Background Plus Pattern */}
      <BackgroundPlus className="fixed inset-0 z-0" fade={true} opacity={0.6} plusSize={120} />
      
      {/* Navigation Header */}
      <header className="relative z-50">
        <Navbar isDarkTheme={isDarkTheme} onThemeToggle={toggleTheme} />
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-16 sm:pt-20 md:pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <motion.div
          ref={featuresRef}
          initial={{ opacity: 0, y: 60 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FeaturesSection />
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 60 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <CTASection />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
