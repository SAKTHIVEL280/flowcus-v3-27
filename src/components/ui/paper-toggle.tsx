
import React from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaperToggleProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
}

export const PaperToggle = ({ isDark, onToggle, className }: PaperToggleProps) => {
  return (
    <>
      {/* Mobile version - compact */}
      <div className="flex sm:hidden items-center">
        <button
          onClick={onToggle}
          className={cn(
            "cursor-target relative w-8 h-4 rounded-full border transition-all duration-300",
            "shadow-sm hover:shadow-md active:scale-95",
            isDark 
              ? "bg-pencil-blue border-pencil-blue/50" 
              : "bg-paper-cream border-paper-lines",
            className
          )}
        >
          <div
            className={cn(
              "absolute w-2.5 h-2.5 rounded-full transition-all duration-300 top-0.5 border shadow-sm",
              isDark 
                ? "translate-x-4 bg-paper-white border-paper-white" 
                : "translate-x-0.5 bg-pencil-graphite border-pencil-graphite"
            )}
          />
        </button>
      </div>

      {/* Desktop version - with icons */}
      <div className="hidden sm:flex items-center gap-3">
        <Sun className="w-5 h-5 text-pencil-orange" />
        <button
          onClick={onToggle}
          className={cn(
            "cursor-target relative w-12 h-6 rounded-full border-2 transition-all duration-300",
            isDark 
              ? "bg-pencil-blue border-pencil-blue" 
              : "bg-paper-cream border-pencil-graphite",
            "shadow-paper hover:shadow-sketch",
            className
          )}
        >
          <div
            className={cn(
              "absolute w-4 h-4 rounded-full transition-all duration-300 top-0.5 border",
              isDark 
                ? "translate-x-6 bg-paper-white border-paper-white" 
                : "translate-x-0.5 bg-pencil-graphite border-pencil-graphite"
            )}
          />
        </button>
        <Moon className="w-5 h-5 text-pencil-blue" />
      </div>
    </>
  );
};
