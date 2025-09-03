
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { PaperToggle } from "./paper-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { Menu, Sun, Moon } from "lucide-react";

interface NavbarProps {
  className?: string;
  isDarkTheme?: boolean;
  onThemeToggle?: () => void;
}

export const Navbar = ({ className, isDarkTheme, onThemeToggle }: NavbarProps) => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Timer", path: "/timer" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Focus Room", path: "/focus-room" },
  ];

  return (
    <>
      {/* Mobile navigation - Just dropdown and theme button */}
      <div className="fixed top-3 left-3 right-3 z-50 flex sm:hidden justify-end">
        <div className="flex items-center gap-3">
          {/* Mobile Theme Button */}
          {isDarkTheme !== undefined && onThemeToggle && (
            <button
              onClick={onThemeToggle}
              className="cursor-target p-2.5 rounded-xl bg-card/95 backdrop-blur-md border-2 border-paper-lines shadow-paper hover:bg-paper-cream/50 transition-all duration-300"
            >
              {isDarkTheme ? (
                <Sun className="h-5 w-5 text-pencil-orange" />
              ) : (
                <Moon className="h-5 w-5 text-pencil-blue" />
              )}
            </button>
          )}
          
          {/* Mobile dropdown navigation */}
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-target p-2.5 rounded-xl bg-card/95 backdrop-blur-md border-2 border-paper-lines shadow-paper hover:bg-paper-cream/50 transition-all duration-300">
              <Menu className="h-5 w-5 text-pencil-blue" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-48 bg-card/98 backdrop-blur-md border-2 border-paper-lines rounded-2xl shadow-float mt-2 p-2 z-[100]"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <DropdownMenuItem key={item.name} asChild className="p-0 mb-1 last:mb-0">
                    <Link
                      to={item.path}
                      className={cn(
                        "cursor-target w-full px-4 py-3 rounded-xl font-kalam font-medium transition-all duration-300",
                        "hover:bg-paper-cream hover:text-pencil-blue focus:bg-paper-cream focus:text-pencil-blue",
                        "border border-transparent hover:border-paper-lines/30",
                        isActive 
                          ? "text-pencil-blue bg-paper-cream/90 border-paper-lines/50 shadow-paper" 
                          : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 hidden sm:flex justify-center">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "bg-card/95 backdrop-blur-md border-2 rounded-2xl shadow-paper",
            "border-paper-lines dark:border-paper-lines",
            "px-6 py-3 w-auto",
            className
          )}
        >
          <div className="flex items-center gap-8">
            {/* FLOWCUS Logo - Desktop only */}
            <Link to="/" className="cursor-target font-bold text-2xl md:text-3xl text-pencil-blue tracking-tight hover:scale-105 transition-transform duration-300">
              FLOWCUS
            </Link>
            
            {/* Desktop menu items */}
            <div className="flex items-center gap-8">
              <div className="w-px h-6 bg-paper-lines"></div>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "cursor-target relative px-4 py-2 rounded-xl font-kalam font-medium transition-all duration-300",
                    "hover:scale-105 hover:bg-paper-cream",
                    isActive 
                      ? "text-pencil-blue bg-paper-cream shadow-paper" 
                      : "text-foreground hover:text-pencil-blue"
                  )}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    {item.name}
                  </motion.span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-pencil-blue/10 rounded-xl border border-pencil-blue/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
                );
              })}
              
              {/* Desktop Theme Toggle */}
              {isDarkTheme !== undefined && onThemeToggle && (
                <div className="ml-4 pl-4 border-l border-paper-lines">
                  <PaperToggle isDark={isDarkTheme} onToggle={onThemeToggle} />
                </div>
              )}
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
};
