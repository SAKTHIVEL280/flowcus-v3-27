import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Plus, Trophy, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Start Focus Session",
      icon: Play,
      variant: "default" as const,
      onClick: () => navigate("/timer")
    },
    {
      title: "Add New Task",
      icon: Plus,
      variant: "secondary" as const,
      onClick: () => navigate("/focus-room")
    },
    {
      title: "View Leaderboard",
      icon: Trophy,
      variant: "secondary" as const,
      onClick: () => {}
    },
    {
      title: "Schedule Focus Time",
      icon: Calendar,
      variant: "secondary" as const,
      onClick: () => {}
    }
  ];

  return (
    <Card className="bg-gradient-paper border-2 border-paper-lines shadow-paper">
      <CardHeader>
        <CardTitle className="font-arkhip text-xl text-pencil-graphite">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size="lg"
              onClick={action.onClick}
              className="h-16 font-kalam text-sm justify-start gap-3 shadow-paper border-2 border-paper-lines"
            >
              <action.icon className="w-5 h-5" />
              {action.title}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};