import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

const weeklyData = [
  { day: "Mon", minutes: 180 },
  { day: "Tue", minutes: 240 },
  { day: "Wed", minutes: 120 },
  { day: "Thu", minutes: 300 },
  { day: "Fri", minutes: 210 },
  { day: "Sat", minutes: 150 },
  { day: "Sun", minutes: 90 },
];

const monthlyData = [
  { week: "Week 1", minutes: 920 },
  { week: "Week 2", minutes: 1150 },
  { week: "Week 3", minutes: 780 },
  { week: "Week 4", minutes: 1340 },
];

const chartConfig = {
  minutes: {
    label: "Minutes",
    color: "hsl(var(--pencil-blue))",
  },
};

export const AnalyticsCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Weekly Activity Chart */}
      <Card className="border-0 shadow-sketch bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="font-arkhip text-xl text-pencil-graphite flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pencil-blue"></div>
            Weekly Activity
          </CardTitle>
          <p className="font-kalam text-sm text-muted-foreground">Focus time in minutes</p>
        </CardHeader>
        <CardContent className="pt-0">
          <ChartContainer config={chartConfig} className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="weeklyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--pencil-blue))" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(var(--pencil-blue))" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  className="font-kalam"
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  className="font-kalam"
                  domain={[0, 320]}
                  ticks={[0, 50, 100, 150, 200, 250, 300]}
                  tickFormatter={(value) => `${value}m`}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent labelFormatter={(label) => `${label}`} />}
                />
                <Area 
                  dataKey="minutes" 
                  stroke="hsl(var(--pencil-blue))"
                  strokeWidth={3}
                  fill="url(#weeklyGradient)"
                  dot={{ fill: "hsl(var(--pencil-blue))", strokeWidth: 0, r: 5 }}
                  activeDot={{ r: 7, strokeWidth: 0, fill: "hsl(var(--pencil-blue))" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Monthly Progress Chart */}
      <Card className="border-0 shadow-sketch bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="font-arkhip text-xl text-pencil-graphite flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pencil-green"></div>
            Monthly Progress
          </CardTitle>
          <p className="font-kalam text-sm text-muted-foreground">Total weekly focus time</p>
        </CardHeader>
        <CardContent className="pt-0">
          <ChartContainer config={chartConfig} className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="monthlyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--pencil-green))" stopOpacity={1} />
                    <stop offset="100%" stopColor="hsl(var(--pencil-green))" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="week" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  className="font-kalam"
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  className="font-kalam"
                  domain={[0, 1400]}
                  ticks={[0, 200, 400, 600, 800, 1000, 1200, 1400]}
                  tickFormatter={(value) => `${value}m`}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent labelFormatter={(label) => `${label}`} />}
                />
                <Bar 
                  dataKey="minutes" 
                  fill="url(#monthlyGradient)"
                  radius={[6, 6, 0, 0]}
                  stroke="hsl(var(--pencil-green))"
                  strokeWidth={1}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};