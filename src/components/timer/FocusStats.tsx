import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Target, Coins, Flame } from "lucide-react";

export const FocusStats: React.FC = () => {
  const stats = [
    { label: "Focus Sessions", value: "3", icon: Target, color: "text-pencil-blue" },
    { label: "Focus Time", value: "1h 15m", icon: Clock, color: "text-pencil-purple" },
    { label: "Coins Earned", value: "45", icon: Coins, color: "text-pencil-orange" },
    { label: "Current Streak", value: "5 days", icon: Flame, color: "text-pencil-red" },
  ];

  return (
    <Card className="cursor-target bg-gradient-paper border-2 border-paper-lines shadow-paper">
      <CardHeader>
        <CardTitle className="font-arkhip text-xl text-pencil-graphite">
          Today's Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="font-kalam text-sm text-muted-foreground">
                {stat.label}:
              </span>
            </div>
            <span className="font-kalam font-medium text-pencil-graphite">
              {stat.value}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};