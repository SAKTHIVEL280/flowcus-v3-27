import React from "react";
import { Progress } from "@/components/ui/progress";

interface TimerProgressProps {
  progress: number;
}

export const TimerProgress: React.FC<TimerProgressProps> = ({ progress }) => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Progress 
        value={progress} 
        className="h-3 bg-paper-cream border-2 border-paper-lines shadow-paper"
      />
    </div>
  );
};