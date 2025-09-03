import React from "react";

interface TimerDisplayProps {
  time: string;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  return (
    <div className="space-y-4">
      <h1 className="font-arkhip text-8xl md:text-[10rem] font-bold text-pencil-graphite tracking-tight">
        {time}
      </h1>
      <p className="font-kalam text-xl text-muted-foreground">
        Stay focused!
      </p>
    </div>
  );
};