import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 sm:space-y-8 bg-gradient-paper rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-paper-lines shadow-float relative overflow-hidden"
      >
        {/* Background decoration */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 right-8 w-16 h-16 border-2 border-pencil-blue/10"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 left-8 w-12 h-12 border-2 border-pencil-orange/10"
        />

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pencil-graphite">
          Ready to transform your productivity?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
          Join thousands of focused individuals who have already discovered the power of FLOWCUS.
        </p>
        <motion.div
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.995 }}
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        >
          <Button variant="sketch" size="xl" className="text-lg shadow-sketch transition-transform duration-200">
            Start Your First Session
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};