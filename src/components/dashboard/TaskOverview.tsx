import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Circle } from "lucide-react";

export const TaskOverview: React.FC = () => {
  const taskStats = [
    { 
      label: "Completed", 
      value: 12, 
      icon: CheckCircle, 
      color: "text-pencil-green",
      bgColor: "bg-pencil-green/10",
      borderColor: "border-pencil-green/20"
    },
    { 
      label: "In Progress", 
      value: 3, 
      icon: Clock, 
      color: "text-pencil-orange",
      bgColor: "bg-pencil-orange/10",
      borderColor: "border-pencil-orange/20"
    },
    { 
      label: "Not Started", 
      value: 7, 
      icon: Circle, 
      color: "text-pencil-blue",
      bgColor: "bg-pencil-blue/10",
      borderColor: "border-pencil-blue/20"
    },
  ];

  return (
    <Card className="bg-gradient-paper border-2 border-paper-lines shadow-paper">
      <CardHeader>
        <CardTitle className="font-arkhip text-xl text-pencil-graphite">Task Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {taskStats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border-2 ${stat.bgColor} ${stat.borderColor} shadow-paper`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-2xl font-bold font-arkhip ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-kalam text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};