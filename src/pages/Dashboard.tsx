import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { AnalyticsCharts } from "@/components/dashboard/AnalyticsCharts";
import { TaskOverview } from "@/components/dashboard/TaskOverview";
import { RecentBadges } from "@/components/dashboard/RecentBadges";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("flowcus-theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
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
    <div className={`min-h-screen bg-background transition-all duration-500 ${isDarkTheme ? 'dark' : ''}`}>
      <Navbar isDarkTheme={isDarkTheme} onThemeToggle={toggleTheme} />
      
      <main className="relative z-10 pt-16 sm:pt-20 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-3 sm:space-y-4">
              <h1 className="font-arkhip text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pencil-graphite">
                Dashboard
              </h1>
              <p className="font-kalam text-base sm:text-lg text-muted-foreground px-4">
                Track your productivity journey and achievements
              </p>
            </div>

            {/* Main Stats Grid */}
            <StatsGrid />

            {/* Analytics Charts */}
            <AnalyticsCharts />

            {/* Task Overview */}
            <TaskOverview />

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column */}
              <div className="space-y-6 sm:space-y-8">
                <RecentBadges />
                <QuickActions />
              </div>
              
              {/* Right Column */}
              <div className="space-y-6 sm:space-y-8">
                <RecentActivity />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;