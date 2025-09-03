import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sunrise, Target, Flame, ChevronRight } from "lucide-react";

export const RecentBadges: React.FC = () => {
  const recentBadges = [
    {
      name: "Early Bird",
      description: "Started focus session before 8 AM",
      icon: Sunrise,
      color: "text-pencil-orange",
      bgColor: "bg-pencil-orange/10",
      status: "Earned recently"
    },
    {
      name: "Focus Master",
      description: "Completed 5+ hour focus session",
      icon: Target,
      color: "text-pencil-blue",
      bgColor: "bg-pencil-blue/10",
      status: "Earned recently"
    },
    {
      name: "Streak Legend",
      description: "Maintained 14-day streak",
      icon: Flame,
      color: "text-pencil-red",
      bgColor: "bg-pencil-red/10",
      status: "Earned recently"
    }
  ];

  return (
    <Card className="bg-gradient-paper border-2 border-paper-lines shadow-paper">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-arkhip text-xl text-pencil-graphite">Recent Badges</CardTitle>
          <Button variant="ghost" size="sm" className="font-kalam text-pencil-blue hover:bg-pencil-blue/10">
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentBadges.map((badge, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border-2 ${badge.bgColor} border-paper-lines shadow-paper text-center space-y-3`}
            >
              <div className={`w-12 h-12 mx-auto rounded-full ${badge.bgColor} border-2 border-paper-lines flex items-center justify-center`}>
                <badge.icon className={`w-6 h-6 ${badge.color}`} />
              </div>
              <div>
                <div className="font-arkhip font-semibold text-pencil-graphite">{badge.name}</div>
                <div className="text-xs font-kalam text-muted-foreground mt-1">
                  {badge.description}
                </div>
              </div>
              <Badge variant="secondary" className="text-xs font-kalam bg-pencil-green/10 text-pencil-green border-pencil-green/20">
                {badge.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};