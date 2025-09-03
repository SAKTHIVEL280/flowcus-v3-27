import React from "react";
import { motion } from "framer-motion";
import { Clock, Target, Trophy, Users, Zap, Brain } from "lucide-react";

const features = [
  {
    title: "Smart Pomodoro Timer",
    description: "Adaptive timing that learns from your focus patterns and adjusts for maximum productivity.",
    icon: <Clock className="w-6 h-6" />,
    color: "pencil-blue",
    size: "large"
  },
  {
    title: "Gamified Progress",
    description: "Earn points, unlock achievements, and level up your focus skills.",
    icon: <Trophy className="w-6 h-6" />,
    color: "pencil-orange",
    size: "medium"
  },
  {
    title: "Smart Tasks",
    description: "AI-powered task prioritization that helps you focus on what matters most.",
    icon: <Target className="w-6 h-6" />,
    color: "pencil-green",
    size: "medium"
  },
  {
    title: "Focus Rooms",
    description: "Join virtual study sessions with friends and stay motivated together.",
    icon: <Users className="w-6 h-6" />,
    color: "pencil-purple",
    size: "large"
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const isLarge = feature.size === "large";
  
  const colorClasses = {
    "pencil-blue": {
      bg: "bg-pencil-blue/10",
      border: "border-pencil-blue/20",
      text: "text-pencil-blue",
      dot: "bg-pencil-blue/20"
    },
    "pencil-orange": {
      bg: "bg-pencil-orange/10", 
      border: "border-pencil-orange/20",
      text: "text-pencil-orange",
      dot: "bg-pencil-orange/20"
    },
    "pencil-green": {
      bg: "bg-pencil-green/10",
      border: "border-pencil-green/20", 
      text: "text-pencil-green",
      dot: "bg-pencil-green/20"
    },
    "pencil-purple": {
      bg: "bg-pencil-purple/10",
      border: "border-pencil-purple/20",
      text: "text-pencil-purple", 
      dot: "bg-pencil-purple/20"
    },
    "pencil-red": {
      bg: "bg-pencil-red/10",
      border: "border-pencil-red/20",
      text: "text-pencil-red",
      dot: "bg-pencil-red/20"
    }
  };

  const colors = colorClasses[feature.color as keyof typeof colorClasses];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`group relative cursor-target p-4 sm:p-6 bg-card border-2 border-paper-lines rounded-xl sm:rounded-2xl shadow-paper hover:shadow-sketch transition-all duration-300 hover:-translate-y-1 ${
        isLarge ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Feature Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} border-2 ${colors.border} mb-4`}
      >
        <div className={colors.text}>
          {feature.icon}
        </div>
      </motion.div>

      {/* Feature Content */}
      <div className="space-y-2 sm:space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-card-foreground group-hover:text-pencil-graphite transition-colors">
          {feature.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Decorative corner */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 * index }}
        className={`absolute top-2 right-2 w-2 h-2 ${colors.bg} border ${colors.border}`}
      />
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pencil-graphite">
          Features that keep you focused
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          Every feature is designed with one goal in mind: keeping you focused and productive.
        </p>
      </motion.div>

      {/* Mobile-First Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};