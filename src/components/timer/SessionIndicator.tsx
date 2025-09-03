import React from "react";
import { Badge } from "@/components/ui/badge";
import { Clock, Coffee, Timer } from "lucide-react";

interface SessionIndicatorProps {
  sessionType: 'focus' | 'shortBreak' | 'longBreak';
  completedSessions: number;
}

export const SessionIndicator: React.FC<SessionIndicatorProps> = ({
  sessionType,
  completedSessions,
}) => {
  const getSessionInfo = () => {
    switch (sessionType) {
      case 'focus':
        return {
          label: 'Focus Session',
          icon: <Timer className="w-4 h-4" />,
          variant: 'default' as const
        };
      case 'shortBreak':
        return {
          label: 'Short Break',
          icon: <Coffee className="w-4 h-4" />,
          variant: 'secondary' as const
        };
      case 'longBreak':
        return {
          label: 'Long Break',
          icon: <Clock className="w-4 h-4" />,
          variant: 'outline' as const
        };
    }
  };

  const sessionInfo = getSessionInfo();

  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <Badge variant={sessionInfo.variant} className="flex items-center gap-2 px-3 py-1 text-sm font-kalam">
        {sessionInfo.icon}
        {sessionInfo.label}
      </Badge>
      
      <div className="text-sm text-muted-foreground font-kalam">
        Sessions completed: <span className="font-semibold text-pencil-graphite">{completedSessions}</span>
      </div>
    </div>
  );
};