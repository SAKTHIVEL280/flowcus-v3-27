import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

interface TimerControlsProps {
  isRunning: boolean;
  isFinished: boolean;
  onStart: () => void;
  onReset: () => void;
}

export const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  isFinished,
  onStart,
  onReset,
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {!isFinished && (
        <Button
          variant="hero"
          size="xl"
          onClick={onStart}
          className="cursor-target min-w-32"
        >
          {isRunning ? (
            <>
              <Pause className="w-5 h-5" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Start
            </>
          )}
        </Button>
      )}
      <Button
        variant="outline"
        size="xl"
        onClick={onReset}
        className="cursor-target"
      >
        <RotateCcw className="w-5 h-5" />
        Reset
      </Button>
    </div>
  );
};