import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Flame, Clock, Award, Coins } from "lucide-react";

export const RecentActivity: React.FC = () => {
  const activities = [
    {
      type: "session",
      title: "Completed Focus Session",
      duration: "2 hours",
      time: "2 hours ago",
      coins: 25,
      icon: CheckCircle,
      color: "text-pencil-green"
    },
    {
      type: "streak",
      title: "Achieved 15-day streak",
      time: "1 day ago",
      coins: 100,
      icon: Flame,
      color: "text-pencil-red"
    },
    {
      type: "task",
      title: "Completed task: Dashboard setup",
      time: "1 day ago",
      coins: 50,
      icon: Clock,
      color: "text-pencil-blue"
    },
    {
      type: "badge",
      title: "Earned 'Focus Master' badge",
      time: "2 days ago",
      coins: 200,
      icon: Award,
      color: "text-pencil-orange"
    }
  ];

  return (
    <Card className="bg-gradient-paper border-2 border-paper-lines shadow-paper">
      <CardHeader>
        <CardTitle className="font-arkhip text-xl text-pencil-graphite">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-paper-cream/50 border border-paper-lines">
              <div className={`w-10 h-10 rounded-full bg-paper-white border-2 border-paper-lines flex items-center justify-center ${activity.color}`}>
                <activity.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-kalam font-medium text-pencil-graphite">
                  {activity.title}
                </div>
                {activity.duration && (
                  <div className="text-sm font-kalam text-muted-foreground">
                    {activity.duration}
                  </div>
                )}
                <div className="text-xs font-kalam text-muted-foreground">
                  {activity.time}
                </div>
              </div>
              <div className="flex items-center gap-1 text-pencil-green font-kalam font-medium">
                <Coins className="w-4 h-4" />
                +{activity.coins}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};