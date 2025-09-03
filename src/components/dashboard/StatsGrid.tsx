import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Star, Coins, Flame, Clock } from "lucide-react";

export const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Level Progress Card */}
      <Card className="bg-gradient-paper border-2 border-paper-lines shadow-paper">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="font-arkhip text-lg text-pencil-graphite">Level Progress</CardTitle>
            <Star className="w-5 h-5 text-pencil-orange" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold font-arkhip text-pencil-graphite">Level 12</div>
            <Badge variant="secondary" className="bg-pencil-orange/10 text-pencil-orange border-pencil-orange/20">
              <Star className="w-3 h-3 mr-1" />
              Gold
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-kalam text-muted-foreground">2,450 XP to next level</span>
              <span className="font-kalam text-pencil-blue">85%</span>
            </div>
            <Progress value={85} className="h-2 bg-paper-cream border border-paper-lines" />
          </div>
        </CardContent>
      </Card>

      {/* Focus Coins Card */}
      <Card className="bg-gradient-paper border-2 border-paper-lines shadow-paper">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="font-arkhip text-lg text-pencil-graphite">Focus Coins</CardTitle>
            <Coins className="w-5 h-5 text-pencil-orange" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-3xl font-bold font-arkhip text-pencil-graphite">1,247</div>
          <div className="text-sm font-kalam text-pencil-green">+125 today</div>
        </CardContent>
      </Card>

      {/* Streak Card */}
      <Card className="bg-gradient-paper border-2 border-paper-lines shadow-paper">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="font-arkhip text-lg text-pencil-graphite">Streak</CardTitle>
            <Flame className="w-5 h-5 text-pencil-red" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-3xl font-bold font-arkhip text-pencil-graphite">15</div>
          <div className="space-y-1">
            <div className="text-sm font-kalam text-muted-foreground">Day Streak</div>
            <Badge variant="secondary" className="bg-pencil-red/10 text-pencil-red border-pencil-red/20">
              🔥 Personal best!
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Total Focus Time Card */}
      <Card className="bg-gradient-paper border-2 border-paper-lines shadow-paper">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="font-arkhip text-lg text-pencil-graphite">Total Focus</CardTitle>
            <Clock className="w-5 h-5 text-pencil-blue" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-3xl font-bold font-arkhip text-pencil-graphite">24h 15m</div>
          <div className="text-sm font-kalam text-pencil-green">+8h 30m this week</div>
        </CardContent>
      </Card>
    </div>
  );
};