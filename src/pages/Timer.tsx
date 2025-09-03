import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/ui/navbar";
import { TimerDisplay } from "@/components/timer/TimerDisplay";
import { TimerControls } from "@/components/timer/TimerControls";
import { TimerProgress } from "@/components/timer/TimerProgress";
import { FocusStats } from "@/components/timer/FocusStats";
import { FocusTasks } from "@/components/timer/FocusTasks";
import { TimerSettings } from "@/components/timer/TimerSettings";
import { SessionIndicator } from "@/components/timer/SessionIndicator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Timer = () => {
  const { toast } = useToast();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState<'focus' | 'shortBreak' | 'longBreak'>('focus');
  const [sessionProgress, setSessionProgress] = useState(0);
  const [focusTime, setFocusTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [settingsChanged, setSettingsChanged] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [autoStart, setAutoStart] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("flowcus-theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      localStorage.setItem("flowcus-theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          const totalTime = sessionType === 'focus' ? focusTime * 60 : 
                           sessionType === 'shortBreak' ? shortBreak * 60 : longBreak * 60;
          setSessionProgress(((totalTime - newTime) / totalTime) * 100);
          
          // Check if timer finished
          if (newTime === 0) {
            setIsRunning(false);
            setIsFinished(true);
            // Use setTimeout to ensure state updates happen after this render cycle
            setTimeout(() => handleSessionComplete(), 100);
            return 0; // Ensure we return 0 for this cycle
          }
          
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, sessionType, focusTime, shortBreak, longBreak, toast]);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("flowcus-theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const updateTimerFromSettings = () => {
    const totalTime = sessionType === 'focus' ? focusTime * 60 : 
                     sessionType === 'shortBreak' ? shortBreak * 60 : longBreak * 60;
    setTimeLeft(totalTime);
    setSessionProgress(0);
    setSettingsChanged(false);
  };

  const handleSessionComplete = () => {
    if (sessionType === 'focus') {
      setCompletedSessions(prev => prev + 1);
      
      // Trigger confetti for completed focus session
      confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 }
      });
      
      // Determine next session type
      const newCompletedCount = completedSessions + 1;
      if (newCompletedCount % 4 === 0) {
        // Long break after 4 focus sessions
        setSessionType('longBreak');
        setTimeLeft(longBreak * 60);
        toast({
          title: "🎉 Great work!",
          description: `You've completed ${newCompletedCount} focus sessions! Time for a long break.`,
        });
      } else {
        // Short break
        setSessionType('shortBreak');
        setTimeLeft(shortBreak * 60);
        toast({
          title: "✅ Focus session complete!",
          description: "Time for a short break to recharge.",
        });
      }
    } else {
      // Break completed, back to focus
      setSessionType('focus');
      setTimeLeft(focusTime * 60);
      toast({
        title: "⚡ Break over!",
        description: "Ready to focus again?",
      });
    }
    
    setSessionProgress(0);
    setIsFinished(false); // Reset finished state for next session
    
    // Auto-start next session if enabled
    if (autoStart) {
      setTimeout(() => setIsRunning(true), 1000);
    }
  };

  const handleSettingsSaved = () => {
    // If timer is not running, update immediately
    if (!isRunning) {
      updateTimerFromSettings();
    } else {
      // Mark that settings have changed to update on reset
      setSettingsChanged(true);
    }
  };

  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFinished(false);
    setSessionType('focus');
    setCompletedSessions(0);
    updateTimerFromSettings();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`min-h-screen bg-background transition-all duration-500 ${isDarkTheme ? 'dark' : ''}`}>
      <Navbar isDarkTheme={isDarkTheme} onThemeToggle={toggleTheme} />
      
      <main className="relative z-10 pt-16 sm:pt-20 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Main Timer Section */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-paper rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-paper-lines shadow-float text-center space-y-6 sm:space-y-8"
              >
                <SessionIndicator 
                  sessionType={sessionType}
                  completedSessions={completedSessions}
                />
                <TimerDisplay time={formatTime(timeLeft)} />
                <TimerControls 
                  isRunning={isRunning}
                  isFinished={isFinished}
                  onStart={handleStart}
                  onReset={handleReset}
                />
                <TimerProgress progress={sessionProgress} />
                
                {/* Auto-start toggle */}
                <div className="flex items-center justify-center gap-3 pt-4">
                  <Switch
                    id="auto-start"
                    checked={autoStart}
                    onCheckedChange={setAutoStart}
                  />
                  <Label htmlFor="auto-start" className="font-kalam text-sm text-pencil-graphite">
                    Auto-start next session
                  </Label>
                </div>
              </motion.div>
              
              <div className="mt-6 sm:mt-8">
                <TimerSettings
                  focusTime={focusTime}
                  shortBreak={shortBreak}
                  longBreak={longBreak}
                  isRunning={isRunning}
                  onFocusTimeChange={setFocusTime}
                  onShortBreakChange={setShortBreak}
                  onLongBreakChange={setLongBreak}
                  onSettingsSaved={handleSettingsSaved}
                />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              <FocusStats />
              <FocusTasks />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timer;
